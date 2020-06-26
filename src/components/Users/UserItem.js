import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withFirebase } from '../Firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      open: false,
      newprofit:0,
      newamount:0,

    };
  }

  componentDidMount() {
    if (!this.props.user) {
      this.setState({ loading: true });
    }

    this.props.firebase
      .user(this.props.match.params.id)
      .on('value', snapshot => {
        this.props.onSetUser(
          snapshot.val(),
          this.props.match.params.id,
        );

        this.setState({ loading: false });
      });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.props.user.email);
  };

  render() {
    const { user } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">EDIT</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit Amount</DialogContentText>
            <input type="number" min="0" onChange={(e)=>{this.setState({newamount:e.target.value})}} />
            <DialogContentText>Edit Profit</DialogContentText>
            <input type="number"  onChange={(e)=>{this.setState({newprofit:e.target.value})}} min="0" />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button

              onClick={() => {
                this.props.firebase
                  .user(this.props.match.params.id)
                  .update({
                    profit: this.state.newamount,
                    amount: this.state.newprofit,
                   
                  })
              }}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <h2>USER ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        <TableContainer component={Paper}>
          <Table className={this.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  EMAIL
                </StyledTableCell>
                <StyledTableCell align="center">
                  USERNAME
                </StyledTableCell>
                <StyledTableCell align="center">
                  AMOUNT($)
                </StyledTableCell>
                <StyledTableCell align="center">edit</StyledTableCell>
                <StyledTableCell align="center">
                  PROFIT($)
                </StyledTableCell>
                <StyledTableCell align="center">edit</StyledTableCell>
                <StyledTableCell align="center">
                  PHONE
                </StyledTableCell>
                <StyledTableCell align="center">
                  WALLET
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user && (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {user.email}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.amount}
                  </StyledTableCell>

                  <StyledTableCell>
                    <div onClick={this.handleClickOpen}>
                      <EditIcon />
                    </div>
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {user.profit}
                  </StyledTableCell>
                  <StyledTableCell>
                    {' '}
                    <EditIcon />
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {user.phone}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.wallet}
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {user && (
          <div>
            <button
              type="button"
              onClick={this.onSendPasswordResetEmail}
            >
              Send Password Reset
            </button>
            <br />
            <Fab size="small" color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: (state.userState.users || {})[props.match.params.id],
});

const mapDispatchToProps = dispatch => ({
  onSetUser: (user, uid) => dispatch({ type: 'USER_SET', user, uid }),
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UserItem);
