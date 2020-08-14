import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import { withFirebase } from '../Firebase';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import QRCode from 'qrcode.react';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AmountSlider = createMuiTheme({
  overrides: {
    MuiSlider: {
      root: {
        color: '#f0b90b',
        height: 3,
        padding: '13px 0',
        minWidth: '400px',
      },
      thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,

        '& .bar': {
          // display: inline-block !important;
          height: 9,
          width: 1,
          backgroundColor: 'currentColor',
          marginLeft: 1,
          marginRight: 1,
        },
      },
      active: {},
      track: {
        height: 3,
      },

      rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
      },
    },
  },
});
function valuetext(value) {
  return `${value}°C`;
}
function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <OfflineBoltIcon />
    </span>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
  slider: {
    color: '#f0b90b',
    minWidth: '400px',
  },
  table: {
    maxWidth: 400,
  },
  btn2: {
    color: 'white',
    backgroundColor: '#f0b90b',
    margin: '0 10px',
    padding: '10px',
    fontWeight: 'bold',
  },
}));
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
function upgrade({ onSetOrder }) {
  var obj = {};
  const classes = useStyles();
  const [btcview, setbtc] = React.useState(true);
  const [btcplan, setbtcplan] = React.useState('');
  const [ethplan, setethplan] = React.useState('');
  const [value, setValue] = React.useState(20500);
  const [btcval, setbtcvalue] = React.useState(0);
  const [ethval, setethvalue] = React.useState(0);
  const [btchashval, setbtchashvalue] = React.useState(0);
  const [ethhashval, setethhashvalue] = React.useState(0);
  const [copySuccess, setCopySuccess] = React.useState(false);
  const [value22, setValue22] = React.useState('BITCOIN');
  const [wannapay, setwannapay] = React.useState(false);
  // your function to copy here
  const [open, setOpen] = React.useState(false);
  const handleChange22 = event => {
    setValue22(event.target.value);
    window.localStorage.setItem('pt', event.target.value);
  };
  const btcwallet = '1BoD1hBgwm74F2Q7h9NbY1KtBbV9VrvskZ';
  const ethwallet = '0xCE3BDF72fA3c7b9A5c4AD5490Ed8D67a29941A74';
  // your function to copy here
  const [pt, setpt] = React.useState(btcwallet);
  React.useEffect(() => {
    var tmp = window.localStorage.getItem('pt');
    if (tmp === 'btc') {
      setpt(btcwallet);
    }
    if (tmp === 'eth') {
      setpt(ethwallet);
    }
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };
  const AirbnbSlider = withStyles({
    root: {
      color: '#f0b90b',
      height: 3,
      padding: '13px 0',
      minWidth: '400px',
    },

    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,

      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
    },

    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);

  const handleSliderChange = (event, newValue) => {
    setbtcplan('BTC-UPGRADE');
    setbtchashvalue(`${Math.round(newValue / 192)}TH/s`);
    setbtcvalue(`${newValue}`);
    obj['name'] = 'BTC-UPGRADE';
    obj['price'] = `${newValue}`;
    obj['hashpower'] = `${Math.round(newValue / 192)}TH/s`;
    onSetOrder(obj);

    window.localStorage.setItem('order', JSON.stringify(obj));
    window.localStorage.setItem('order', JSON.stringify(obj));
  };
  const handleSliderChangeeth = (event, newValue) => {
    setethplan('ETH-UPGRADE');
    setethhashvalue(`${Math.round((newValue + 1000) / 192)}TH/s`);
    setethvalue(`${newValue + 1000}`);
    obj['name'] = 'ETH-UPGRADE';
    obj['price'] = `${newValue}`;
    obj['hashpower'] = `${Math.round((newValue + 1000) / 192)}TH/s`;
    onSetOrder(obj);
    window.localStorage.setItem('order', JSON.stringify(obj));
    window.localStorage.setItem('order', JSON.stringify(obj));
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {' PAYMENT STATUS'}
        </DialogTitle>
        <DialogContent>
          <Fin />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Alert severity="info">
        Please only upgrade hashpower if you are required to by our
        customer service
      </Alert>
      <div>
        <Button
          variant="contained"
          className={classes.btn2}
          onClick={e => {
            e.preventDefault();
            setbtc(true);
            setwannapay(false);
          }}
        >
          Bitcoin Mining
        </Button>
        <Button
          variant="contained"
          className={classes.btn2}
          onClick={e => {
            e.preventDefault();
            setbtc(false);
            setwannapay(false);
          }}
        >
          Ethereum Mining
        </Button>
      </div>
      {btcview ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          <div>
            <p
              style={{ textAlign: 'center', margin: '3px auto' }}
            >{`${btchashval}`}</p>
            <Divider />
            <p
              style={{ textAlign: 'center', margin: '3px auto' }}
            >{`${btcval}USD`}</p>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{ marginTop: '35px', marginBottom: '13px' }}
              >
                <ThemeProvider theme={AmountSlider}>
                  <Slider
                    defaultValue={500}
                    aria-labelledby="discrete-slider"
                    step={50}
                    min={0}
                    max={10000}
                    onChange={handleSliderChange}
                    ThumbComponent={AirbnbThumbComponent}
                  />
                </ThemeProvider>
              </div>
              <Divider />
            </div>
          </div>

          <div>
            <div>
              {' '}
              <div
                syle={{
                  margin: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <Typography variant="h5">Summary</Typography>
                  <TableContainer
                    component={Paper}
                    className={classes.table}
                  >
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            {' '}
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                            >
                              Plan
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                            >
                              Hashpower
                            </Typography>
                          </TableCell>
                          <TableCell>Price(USD)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>{btcplan}</TableCell>
                          <TableCell>{btchashval}</TableCell>
                          <TableCell>{btcval}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Divider dark />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '20px 3px',
                      maxWidth: '400px',
                    }}
                  >
                    <h5>Total:</h5>
                    <h5>{btcval}</h5>{' '}
                  </div>
                  <Divider dark />
                </div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    PAYMENT TYPE
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value22}
                    onChange={handleChange22}
                  >
                    <FormControlLabel
                      value="btc"
                      control={<Radio />}
                      label="BITCOIN"
                    />
                    <FormControlLabel
                      value="eth"
                      control={<Radio />}
                      label="ETHEREUM"
                    />
                  </RadioGroup>
                </FormControl>
                {!wannapay && (
                  <Button
                    variant="contained"
                    className={classes.btn2}
                    onClick={() => {
                      setwannapay(true);
                    }}
                  >
                    MAKE PAYMENT
                  </Button>
                )}
              </div>
            </div>
          </div>

          {wannapay && (
            <div>
              <Alert severity="info">{`Please scan this address and send ${btcval} USD to complete this order`}</Alert>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <p style={{ marginTop: '5px' }}>{pt}</p>{' '}
                <div style={{ margin: '0 10px' }}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => copyToClipBoard(pt)}
                  >
                    <FileCopyOutlinedIcon />
                  </IconButton>
                </div>
              </div>

              <QRCode value={pt} includeMargin={true} size={300} />
              <div>
                <Button
                  variant="contained"
                  className={classes.btn2}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  CONFIRM PAYMENT
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          <div>
            <p
              style={{ textAlign: 'center', margin: '3px auto' }}
            >{`${ethhashval}`}</p>
            <Divider />
            <p
              style={{ textAlign: 'center', margin: '3px auto' }}
            >{`${ethval}USD`}</p>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{ marginTop: '35px', marginBottom: '13px' }}
              >
                <ThemeProvider theme={AmountSlider}>
                  <Slider
                    defaultValue={500}
                    aria-labelledby="custom"
                    step={50}
                    min={0}
                    max={10000}
                    ThumbComponent={AirbnbThumbComponent}
                    onChange={handleSliderChangeeth}
                  />
                </ThemeProvider>
              </div>
              <Divider />
            </div>
            <div />
          </div>
          <div
            syle={{
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div>
              <Typography variant="h5">Summary</Typography>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {' '}
                        <Typography variant="subtitle2" gutterBottom>
                          Plan
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" gutterBottom>
                          Hashpower
                        </Typography>
                      </TableCell>
                      <TableCell>Price(USD)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{ethplan}</TableCell>
                      <TableCell>{ethhashval}</TableCell>
                      <TableCell>{ethval}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider dark />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '20px 3px',
                }}
              >
                <h5>Total:</h5>
                <h5>{ethval}</h5>{' '}
              </div>
              <Divider dark />
            </div>
            <FormControl component="fieldset">
              <FormLabel component="legend">PAYMENT TYPE</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value22}
                onChange={handleChange22}
              >
                <FormControlLabel
                  value="btc"
                  control={<Radio />}
                  label="BITCOIN"
                />
                <FormControlLabel
                  value="eth"
                  control={<Radio />}
                  label="ETHEREUM"
                />
              </RadioGroup>
            </FormControl>
            {!wannapay && (
              <Button
                variant="contained"
                className={classes.btn2}
                onClick={() => {
                  setwannapay(true);
                }}
              >
                MAKE PAYMENT
              </Button>
            )}
          </div>
          {wannapay && (
            <div>
              {' '}
              <Alert severity="info">{`Please scan this address and send ${ethval} USD to complete this order`}</Alert>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <p style={{ marginTop: '5px' }}>{pt}</p>{' '}
                <div style={{ margin: '0 10px' }}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => copyToClipBoard(pt)}
                  >
                    <FileCopyOutlinedIcon />
                  </IconButton>
                </div>
              </div>
              <QRCode value={pt} includeMargin={true} size={300} />
              <div>
                <Button
                  variant="contained"
                  className={classes.btn2}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  CONFIRM PAYMENT
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSetOrder: order => dispatch({ type: 'ORDER', order }),
});
export default compose(
  withFirebase,

  connect(
    null,
    mapDispatchToProps,
  ),
)(upgrade);
