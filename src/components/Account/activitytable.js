import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { withFirebase } from '../Firebase';
import MuiAlert from '@material-ui/lab/Alert';
const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
  green:{
    color:'green'
  },
  red:{
    color:'red'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function SimpleTable(props) {
  const classes = useStyles();
  React.useEffect(()=>{

    window.localStorage.removeItem('order');
    
      },[])
  return (
    <div>
      { props.authUser.ismining && <Alert
              severity="error"
              style={{
                marginTop: '20px',
              
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Mining stopped temporarily,you will be contacted by our management team
            </Alert>
            }
      <h4 style={{ textAlign: 'center' }}>ACTIVITIES</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cryptocurrncy Name</TableCell>
              <TableCell align="center">Currency Code</TableCell>
              <TableCell align="center">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Bitcoin
              </TableCell>
              <TableCell align="center">BTC</TableCell>
              <TableCell align="center">
                {Number(props.authUser.balance)>=Number(props.authUser.oldbalance) ?<ArrowUpwardIcon className={classes.green} />:(<ArrowDownwardIcon className={classes.red}/>)}
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.authUser.balance)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Ethereum
              </TableCell>
              <TableCell align="center">ETH</TableCell>
              <TableCell align="center">  {Number(props.authUser.ethbalance)>=Number(props.authUser.oldethbalance) ?<ArrowUpwardIcon className={classes.green} />:(<ArrowDownwardIcon className={classes.red}/>)}
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.authUser.ethbalance)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

     

    </div>
  );
}
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

const condition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),
  withFirebase,
  //withAuthorization(condition),
)(SimpleTable);
