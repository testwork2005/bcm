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
import EmailIcon from '@material-ui/icons/Email';
import Moment from 'moment';
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
      newprofit: 0,
      newamount: 0,
      newprofiteth: 0,
      newamounteth:0,
      open2: false,
      topic: '',
      message: '',
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
  handleClose2 = () => {
    this.setState({ open2: false });
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
            <input
              type="number"
              step="any"
              min="0"
             placeholder={user.balance}
              onChange={e => {
                this.setState({ newamount: e.target.value });
              }}
            />
            <DialogContentText>Edit hashpower</DialogContentText>
            <input
              type="number"
              step="any"
              placeholder={user.hashpower}
              onChange={e => {
                this.setState({ newprofit: e.target.value });
              }}
              min="0"
            />
            <DialogContentText>Edit ETH Amount</DialogContentText>
            <input
              type="number"
              step="any"
              min="0"
              placeholder={user.ethbalance}
              onChange={e => {
                this.setState({ newamounteth: e.target.value });
              }}
            />
            <DialogContentText>Edit ETH hashpower</DialogContentText>
            <input
              type="number"
              step="any"
              placeholder={user.ethhashpower}
              onChange={e => {
                this.setState({ newprofiteth: e.target.value });
              }}
              min="0"
            />
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
                    balance: this.state.newamount,
                    hashpower: this.state.newprofit,
                    ethbalance: this.state.newamounteth,
                    ethhashpower: this.state.newprofiteth,
                    oldbalance: user.balance,
                  }).then(()=>{alert('updated successfully');
                  this.handleClose()
                }).catch((err)=>{alert(err)})
              }}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.open2}
          onClose={this.handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            send message
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Topic</DialogContentText>
            <input
              type="textr"
              onChange={e => {
                this.setState({ topic: e.target.value });
              }}
            />
            <DialogContentText>Message</DialogContentText>
            <textarea
              AutoResize
              type="text"
              onChange={e => {
                this.setState({ message: e.target.value });
              }}
              width="300"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.firebase
                  .user(this.props.match.params.id)
                  .child('messages')
                  .push({
                    topic: this.state.topic,
                    message: this.state.message,
                    date: Moment()
                      .format('DD/MM/YYYY')
                      .toString(),
                  })
                  .then(() => {
                    alert('message sent');
                    this.handleClose2();
                  })
                  .catch(() => {
                    alert('something went wrong');
                    this.handleClose2();
                  });
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
                  AMOUNTBTC($)
                </StyledTableCell>
                <StyledTableCell align="center">
                  HASHPOWERBTC(TH/S)
                </StyledTableCell>
                <StyledTableCell align="center">
                  AMOUNTETH($)
                </StyledTableCell>
                <StyledTableCell align="center">
                  HASHPOWERETH(TH/S)
                </StyledTableCell>
                <StyledTableCell align="center">
                  PHONE
                </StyledTableCell>
                <StyledTableCell align="center">
                  WALLETBTC
                </StyledTableCell>
                <StyledTableCell align="center">
                  WALLETETH
                </StyledTableCell>
                <StyledTableCell align="center">edit</StyledTableCell>
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
                    {user.balance}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.hashpower}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.ethbalance}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.ethhashpower}
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {user.phone}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.btcwallet}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.ethwallet}
                  </StyledTableCell>
                  <StyledTableCell>
                    <div onClick={this.handleClickOpen}>
                      <EditIcon />
                    </div>
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
            <Fab
              size="small"
              color="secondary"
              aria-label="edit"
              onClick={() => {
                this.setState({ open2: true });
              }}
            >
              <EmailIcon />
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
