import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
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

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

 function CustomizedTables(props) {
  const classes = useStyles();
const [pendingstate,setuserorder]= React.useState();
const [approvedstate,setappuserorder]= React.useState();
const [expstate,setexpuserorder]= React.useState();
var userorders=[]
var pending=[]
var approved=[]
var expired=[]

function iterate(item) {
 if(item.status=='pending'){
pending.push(item);
 }
 if(item.status=='approved'){
  approved.push(item);
  console.log('o')
   }
   if(item.status=='expired'){
    expired.push(item);
     }
}
React.useEffect(()=>{
 
  props.firebase.orders().once('value').then(function(snapshot) {
    var orders =  snapshot.val() ;
    for (const [key, value] of Object.entries(orders)) {
      if(value.uid==props.authUser.uid){
        userorders.push(value)
      }
    }
    
    
   userorders.forEach(iterate);
   setuserorder(pending);
   setappuserorder(approved)
   setexpuserorder(expired)
    console.log(approved)
    
  });


},[])
  return (
      <div>
    <Typography variant="h5" gutterBottom style={{margin:'10px,5px'}}>
    My Pending Orders
  </Typography>
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
        
            <StyledTableCell>Created</StyledTableCell>
            <StyledTableCell >HashPower</StyledTableCell>
            <StyledTableCell>Algorithm</StyledTableCell>
            <StyledTableCell >InvoiceId</StyledTableCell>
            <StyledTableCell >Amount</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
    {pendingstate ? pendingstate.map((row) => (
            <StyledTableRow >
          
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.hashpower}</StyledTableCell>
              <StyledTableCell>SHA256</StyledTableCell>
              <StyledTableCell >{row.invoice}</StyledTableCell>
              <StyledTableCell >{row.amount}</StyledTableCell>
            </StyledTableRow>
        )):<div>no active orders yet :)</div>}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant="h5" gutterBottom style={{margin:'10px,5px'}}>
    My Active Orders
  </Typography>
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Created</StyledTableCell>
            <StyledTableCell >HashPower</StyledTableCell>
            <StyledTableCell>Algorithm</StyledTableCell>
            <StyledTableCell >InvoiceId</StyledTableCell>
            <StyledTableCell >Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
        {approvedstate ? approvedstate.map((row) => (
            <StyledTableRow >
          
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.hashpower}</StyledTableCell>
              <StyledTableCell>SHA256</StyledTableCell>
              <StyledTableCell >{row.invoice}</StyledTableCell>
              <StyledTableCell >{row.amount}</StyledTableCell>
            </StyledTableRow>
        )):<div>no active orders yet :)</div>}
        
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant="h5" gutterBottom style={{margin:'10px,5px'}}>
    My Ended Orders
  </Typography>
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Created</StyledTableCell>
            <StyledTableCell >HashPower</StyledTableCell>
            <StyledTableCell>Algorithm</StyledTableCell>
            <StyledTableCell >InvoiceId</StyledTableCell>
            <StyledTableCell >Amount</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
       
            
        {expstate ? expstate.map((row) => (
            <StyledTableRow >
          
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.hashpower}</StyledTableCell>
              <StyledTableCell>SHA256</StyledTableCell>
              <StyledTableCell >{row.invoice}</StyledTableCell>
              <StyledTableCell >{row.amount}</StyledTableCell>
            </StyledTableRow>
        )):<div>no active orders yet :)</div>}
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  order:state.orderState,
});
const condition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),

 // withAuthorization(condition),
  withFirebase,
)(CustomizedTables);
