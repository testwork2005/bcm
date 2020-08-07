import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pickplan from './pickplan';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import QRCode from 'qrcode.react';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { withAuthorization, withEmailVerification } from '../Session';
import { withFirebase } from '../Firebase';
import Alert from '@material-ui/lab/Alert';
import { v4 as uuidv4 } from 'uuid';
import IconButton from '@material-ui/core/IconButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 450,
    marginTop: '15px',
  },
  table2: {
    width: 350,
    marginTop: '15px',
  },
  btn: {
    color: '#f0b90b',
    margin: '10px auto',
  },
}));
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
function getorder() {
  return JSON.parse(window.localStorage.getItem('order'));
}

function getSteps() {
  return ['Pick a plan', 'Review Order', 'Payment'];
}
function Fin() {
  return (
    <div>
      <div
        className="lds-facebook"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <div />
        <div />
        <div />
      </div>
      <p style={{ textAlign: 'center' }}>confirming payment...</p>
    </div>
  );
}
function getStepContent(stepIndex, order, handleNext, handleBack) {
  const classes = useStyles();
  const [copySuccess, setCopySuccess] = React.useState(false);

  // your function to copy here

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  switch (stepIndex) {
    case 0:
      return (
        <div
          style={{
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Pickplan hn={handleNext} />
        </div>
      );
    case 1:
      return (
        <Paper className={classes.table}>
          {' '}
          <TableContainer component={Paper}>
            <div>
              <Alert severity="info">
                Please review your order and accept our terms of
                service..
              </Alert>
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Plan</StyledTableCell>
                  <StyledTableCell>HashPower</StyledTableCell>
                  <StyledTableCell>Algorithm</StyledTableCell>
                  <StyledTableCell>InvoiceId</StyledTableCell>
                  <StyledTableCell>StartDate</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>
                    {' '}
                    {order.order.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {order.order.hashpower}
                  </StyledTableCell>
                  <StyledTableCell>SHA256</StyledTableCell>
                  <StyledTableCell>
                    BCM35563768486757644
                  </StyledTableCell>
                  <StyledTableCell>
                    {Moment().toString()}
                  </StyledTableCell>
                  <StyledTableCell>
                    {order.order.price}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={() => {
              handleBack();
            }}
            className={classes.backButton}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleNext();
            }}
          >
            NEXT
          </Button>
        </Paper>
      );
    case 2:
      return (
        <Paper>
          <div
            style={{
              display: 'flex',
              margin: '0 10px',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                minWidth: '45%',
                display: 'flex',
                
                flexDirection: 'column',
               
              }}
            >
             <Paper className={classes.table2}>
          {' '}
          <TableContainer component={Paper}>
            <div>
              <Alert severity="info">
               ORDER DETAILS
              </Alert>
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Plan</StyledTableCell>
                  <StyledTableCell>HashPower</StyledTableCell>
                  
               
                  <StyledTableCell>Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>
                    {' '}
                    {order.order.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {' '}
                    {order.order.hashpower}
                  </StyledTableCell>
                
                  <StyledTableCell>
                    {order.order.price}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
         </Paper>
        
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px auto',
                alignItems: 'center',
              }}
            >
              <Alert severity="info">{`Please scan this address and send ${
                order.order.price
              } USD to complete this order`}</Alert>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <p style={{marginTop:'5px'}}>1BoD1hBgwm74F2Q7h9NbY1KtBbV9VrvskZ</p>{' '}
                <div
                 
                  style={{ margin: '0 10px' }}
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() =>
                      copyToClipBoard(
                        '1BoD1hBgwm74F2Q7h9NbY1KtBbV9VrvskZ',
                      )
                    }
                  >
                    <FileCopyOutlinedIcon />
                  </IconButton>
                </div>
              </div>
              <QRCode
                value="1BoD1hBgwm74F2Q7h9NbY1KtBbV9VrvskZ"
                includeMargin={true}
                size={300}
              />
               <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleNext();
            }}
          >
            CONFIRM PAYMENT
          </Button>
            </div>
          </div>{' '}
        </Paper>
      );
    default:
      return (
        <div>
          <Paper>
            {' '}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px auto',
                alignItems: 'center',
              }}
            >
              <Fin/>
              <Alert severity="info">
                Mining will commence Immediately payment is Approved
              </Alert>
            </div>{' '}
          </Paper>
        </div>
      );
  }
}

function HorizontalLabelPositionBelowStepper({
  order,
  firebase,
  authUser,
}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [opend, setOpend] = React.useState(false);

  const handleClickOpen = () => {
    setOpend(true);
  };

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleNext = () => {
    if (activeStep === 1) {
      setOpend(true);
    }
    if (activeStep === 0) {
      if (localStorage.hasOwnProperty('order')) {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        handleClick({ vertical: 'bottom', horizontal: 'left' });
      } else {
        setState({ ...state, open: true });
      }
    }
    if (activeStep === steps.length - 1) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <Typography className={classes.instructions}>
            {getStepContent(
              activeStep,
              order,
              handleNext,
              handleBack,
            )}
          </Typography>

          <div>
            <Dialog
              open={opend}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => {
                setOpend(false);
              }}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {
                  'Binance CryptoMining Cloud Services Terms of Services'
                }
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <Typography variant="subtitle2" gutterBottom>
                    Effective: 25.07.2020{' '}
                  </Typography>
                  <br />
                  <Typography variant="body2" gutterBottom>
                    This BiNance cryptoMining Cloud Services Terms of
                    Service Specifications document (the “Agreement
                    Specifications”) includes the specifications for
                    price, computational power/hash rate, term, and
                    other pricing factors for the Customers agreement
                    with Binance cryptoMining governed by the Binance
                    cryptoMining Cloud Services Terms of Service (the
                    “Agreement”). All capitalized terms shall have the
                    meaning of the Agreement in effect as of the
                    Effective Date of these Agreement Specifications.
                    The below contract specifications apply to: (i)
                    Section 1.1 (Algorithm), (ii) Section 1.2
                    (Computational Power and Hash Rate), Section 2.1
                    (Upfront Fees), (iii) Section 2.2 (Maintenance
                    Fees), and (iv) Section 5.1 (Contract Term) of the
                    Agreement. By clicking to agree to Agreement
                    Specifications, the Customer accepts and agrees to
                    all terms and conditions of the Agreement and the
                    Agreement Specifications.{' '}
                  </Typography>

                  <List dense>
                    <ListItem>
                      <ListItemText primary=" Algorithm: SHA-256" />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={`Total Hash Rate: ${
                          order.order.hashpower
                        } TH/s`}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={`Upfront Fees: ${
                          order.order.price
                        }USD per TH/s`}
                      />
                    </ListItem>
                  </List>
                  <Typography variant="caption">
                    Payments processed by: Biancecrypto Mining Iceland
                    ehf., Company No. 521016-0430, Borgartúni 27, 105
                    Reykjavík, Iceland
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setOpend(false);
                  }}
                  color="primary"
                >
                  Disagree
                </Button>
                <Button
                  onClick={() => {
                    var uid=uuidv4();
                    var neworder = {
                      name: order.order.name,
                      amount: order.order.price,
                      hashpower: order.order.hashpower,
                      uid: authUser.uid,
                      status: 'pending',
                      date: Moment().toString(),
                      invoice: `BCM-${uuidv4()}`,
                      email: authUser.email,
                    };
                    firebase
                      .orders().child(uid)
                      .set(neworder)
                      .then(() => {
                        setActiveStep(
                          prevActiveStep => prevActiveStep + 1,
                        );
                        setOpend(false);
                      });
                  }}
                  color="primary"
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message="please pick a plan before mving to the next step"
              key={vertical + horizontal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  order: state.orderState,
});

const condition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),

  // withAuthorization(condition),
  withFirebase,
)(HorizontalLabelPositionBelowStepper);
