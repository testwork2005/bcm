import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
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
class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      table: {
        minWidth: 700,
      }

    };
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.setState({ loading: true });
    }

    this.props.firebase.users().on('value', snapshot => {
      this.props.onSetUsers(snapshot.val());

      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <h2>Users</h2>
        {loading && <div>Loading ...</div>}
        <TableContainer component={Paper}>
      <Table className={this.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UID</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
            <StyledTableCell align="right">USERNAME</StyledTableCell>
            <StyledTableCell align="right">PROFILELINK</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.uid}>
              <StyledTableCell component="th" scope="row">
                {user.uid}
              </StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user.username}</StyledTableCell>
              <StyledTableCell align="right">  <Link to={`${ROUTES.ADMIN}/${user.uid}`}>
                  Details
                </Link></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: Object.keys(state.userState.users || {}).map(key => ({
    ...state.userState.users[key],
    uid: key,
  })),
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: 'USERS_SET', users }),
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UserList);
