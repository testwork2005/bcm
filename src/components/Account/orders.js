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

export default function CustomizedTables() {
  const classes = useStyles();

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
          
          </TableRow>
        </TableHead>
        <TableBody>
       
            <StyledTableRow >
              
              <StyledTableCell >10/05/2020</StyledTableCell>
              <StyledTableCell >40 TH/s</StyledTableCell>
              <StyledTableCell>SHA256</StyledTableCell>
              <StyledTableCell >BCM35563768486757644</StyledTableCell>
            </StyledTableRow>
        
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
          
          </TableRow>
        </TableHead>
        <TableBody>
       
            <StyledTableRow >
              
              <StyledTableCell >10/05/2020</StyledTableCell>
              <StyledTableCell >40 TH/s</StyledTableCell>
              <StyledTableCell>SHA256</StyledTableCell>
              <StyledTableCell >BCM35563768486757644</StyledTableCell>
            </StyledTableRow>
        
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
          
          </TableRow>
        </TableHead>
        <TableBody>
       
            <StyledTableRow >
              
              <StyledTableCell >10/05/2020</StyledTableCell>
              <StyledTableCell >40 TH/s</StyledTableCell>
              <StyledTableCell>SHA256</StyledTableCell>
              <StyledTableCell >BCM35563768486757644</StyledTableCell>
            </StyledTableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
