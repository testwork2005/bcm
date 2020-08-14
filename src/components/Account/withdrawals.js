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
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { v4 as uuidv4 } from 'uuid';
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
 function CustomizedTables({firebase,authUser}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setinput] = React.useState(0);
  const [pendingstate,setuserorder]= React.useState([]);
  const [approvedstate,setappuserorder]= React.useState([]);
 
  var userorders=[]
  var pending=[]
  var approved=[]
 var  userorders=[]
  
  function iterate(item) {
   if(item.status=='pending'){
  pending.push(item);
   }
   if(item.status=='approved'){
    approved.push(item);
    console.log('o')
     }
   
  }
  React.useEffect(()=>{
   
   firebase.withdrawals().once('value').then(function(snapshot) {
      var orders =  snapshot.val() ;
      if(!!orders){
        for (const [key, value] of Object.entries(orders)) {
          if(value.uid==authUser.uid){
            userorders.push(value)
          }
        }

        userorders.forEach(iterate);
        setuserorder(pending);
        setappuserorder(approved)
       
         console.log(approved)
      }
      
      
      
   
      
    });
  
  
  },[])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <Button color='primary' variant="outlined" onClick={handleClickOpen}> New Withdrawal </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Withdraw Funds</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All withdrawals go through a review process.this process takes 2-3 business days.if approved funds will be sent to your wallent on file
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ENTER AMOUNT IN USD"
            type="number"
           value={input}
           onChange={(e)=>{
setinput(e.target.value)
           }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{handleClose()

var uUid=uuidv4();
var neworder = {
  amount:Number(input),
  date:Moment().toString(),
  status:'pending',
  uid:authUser.uid
};
if((Number(authUser.balance)>Number(input))||(Number(authUser.ethbalance)>Number(input))){
  firebase
  .withdrawals().child(uUid)
  .set(neworder).then(()=>{
    alert('order request created')
  }).catch(err=>{alert(err)})
 
}
else
alert('insufficient balance')

 
          }} color="primary">
           Approve
          </Button>
        </DialogActions>
      </Dialog>
      <Typography
        variant="h5"
        gutterBottom
        style={{ margin: '10px,5px' }}
      >
        My Pending Withdrawals
      </Typography>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Amount(USD)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {pendingstate && pendingstate.map((row) => (
            <StyledTableRow >
          
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.amount}</StyledTableCell>
             
            </StyledTableRow>
        ))}
           
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="h5"
        gutterBottom
        style={{ margin: '10px,5px' }}
      >
        My Approved Withdrawals
      </Typography>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell >Amount(USD)</StyledTableCell>
           
          
          </TableRow>
        </TableHead>
        <TableBody>
       
        {approvedstate && approvedstate.map((row) => (
            <StyledTableRow >
          
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.amount}</StyledTableCell>
             
            </StyledTableRow>
        ))}
        
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

 //withAuthorization(condition),
  withFirebase,
)(CustomizedTables);
