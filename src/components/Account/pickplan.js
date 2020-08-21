import React from 'react';
import { useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { withFirebase } from '../Firebase';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Tooltip from '@material-ui/core/Tooltip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import  ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  slider: {
    color: '#f0b90b',
  },
  table: {
    minWidth: '400px',
  },
  btn: {
    backgroundColor: '#f0b90b',
    margin: '10px auto',
    minWidth: '100%',
    color: 'white',
    fontWeight: 'bold',
  },
  btn2:{
    color: 'white',
    backgroundColor: '#f0b90b',
    margin:'0 10px',
    padding:'10px',
      fontWeight: 'bold',
  }
}));

const AirbnbSlider = withStyles({
  root: {
    color: '#f0b90b',
    height: 3,
    padding: '13px 0',
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

function valuetext(value) {
  return `${value}°C`;
}
export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, []);
  return update;
}
const plans = {
  btc: [
    {
      names: [
        'BTC-GOLD',
        'BTC-PLATINUM',
        'BTC-DIAMOND',
        'BTC-CUSTOM',
      ],
      hashpower: ['40TH/s', '200TH/s', '500TH/s'],

      prices: ['1500', '7500', '15300'],
    },
  ],
  eth: [
    {
      names: [
        'ETH-GOLD',
        'ETH-PLATINUM',
        'ETH-DIAMOND',
        'ETH-CUSTOM',
      ],
      hashpower: ['62TH/s', '240TH/s', '540TH/s'],

      prices: ['1999', '7999', '15999'],
    },
  ],
};
function pickplan({ onSetOrder, hn }) {
  const [btcview, setbtc] = React.useState(true);
  const [btcplan, setbtcplan] = React.useState('');
  const [ethplan, setethplan] = React.useState('');
  const [value, setValue] = React.useState(20500);
  const [btcval, setbtcvalue] = React.useState(0);
  const [ethval, setethvalue] = React.useState(0);
  const [btchashval, setbtchashvalue] = React.useState(0);
  const [ethhashval, setethhashvalue] = React.useState(0);
  const [value22, setValue22] = React.useState('female');
  const forceUpdate = useForceUpdate();
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <OfflineBoltIcon />
      </span>
    );
  }
  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={value}
      >
        {children}
      </Tooltip>
    );
  }
  

  const handleChange22 = (event) => {
    setValue22(event.target.value);
    window.localStorage.setItem('pt',event.target.value)
  };
  const [order, setorder] = React.useState({});
  var obj = {};
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSliderChange = (event, newValue) => {
    setbtcplan('BTC-CUSTOM');
    setbtchashvalue(`${Math.round(newValue / 28)}TH/s`);
    setbtcvalue(`${newValue}`);
    obj['name'] = plans.btc[0].names[3];
    obj['price'] = `${newValue}`;
    obj['hashpower'] = `${Math.round(newValue / 28)}TH/s`;
    onSetOrder(obj);

    window.localStorage.setItem('order', JSON.stringify(obj));
    window.localStorage.setItem('order', JSON.stringify(obj));
  };
  const handleSliderChangeeth = (event, newValue) => {
    setethplan('ETH-CUSTOM');
    setethhashvalue(`${Math.round((newValue + 1000) / 28)}TH/s`);
    setethvalue(`${newValue + 1000}`);
    obj['name'] = plans.eth[0].names[3];
    obj['price'] = `${newValue}`;
    obj['hashpower'] = `${Math.round((newValue + 1000) / 28)}TH/s`;
    onSetOrder(obj);
    window.localStorage.setItem('order', JSON.stringify(obj));
    window.localStorage.setItem('order', JSON.stringify(obj));
  };
  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button 
            className={classes.btn2}
          onClick={e => {
            e.preventDefault();
            setbtc(true);
          }}
        >
          Bitcoin Mining
        </Button>
        <Button
          className={classes.btn2}
          onClick={e => {
            e.preventDefault();
            setbtc(false);
          }}
        >
          Ethereum Mining
        </Button>
      </div>
      <div className="planpick">
        <div className="planarea">
          {
            //plans area
          }
          {btcview ? (
            <div>
              <Paper style={{ padding: '25px' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '15px' }}>
                    <img
                      src={require('../../static/bitcoin.svg')}
                      alt="btc"
                      width="25"
                    />
                  </div>
                  <div>
                    {' '}
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ fontWeight: 'bold' }}
                    >
                      BITCOIN Radiant Classic - (Limited Offer)
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        SHA-256 Mining Algorithm ?
                      </Typography>
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  STANDARD PLANS
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '15px',
                  }}
                >
                 
                    <Button variant="contained" 
                      className="pn-btn"
                      onClick={() => {
                        setbtcplan('BTCGOLD');
                        setbtchashvalue('40TH/s');
                        setbtcvalue('1,500');
                        /** const plans = {
  
  "btc": [
    { "names":[ "BTC-GOLD", "BTC-PLATINUM", "BTC-DIAMOND","BTC-CUSTOM" ], 
    "hashpower":[ "4TH/s", "20TH/s", "104TH/s" ],
  
    "prices":[ "2999", "9999", "20500" ] },
   
  ],
  "eth": [
    { "names":[ "ETH-GOLD", "ETH-PLATINUM", "ETH-DIAMOND","ETH-CUSTOM" ], 
    "hashpower":[ "4TH/s", "20TH/s", "104TH/s" ],
  
    "prices":[ "3999", "10999", "21500" ] },
   
  ]
 }*/
                        obj['name'] = plans.btc[0].names[0];
                        obj['price'] = plans.btc[0].prices[0];
                        obj['hashpower'] = plans.btc[0].hashpower[0];

                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );

                        onSetOrder(obj);
                      }}
                    >
                      
                        GOLD
                   
                    </Button>
               
               
                    <Button variant="contained" 
                      className="pn-btn"
                      onClick={() => {
                        setbtcplan('BTC-PLATINUM');
                        setbtchashvalue('200TH/s');
                        setbtcvalue('7,500');

                        obj['name'] = plans.btc[0].names[1];
                        obj['price'] = plans.btc[0].prices[1];
                        obj['hashpower'] = plans.btc[0].hashpower[1];

                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                        onSetOrder(obj);
                      }}
                    >
                     
                        PLATINUM
                     
                    </Button>
            
                    <Button variant="contained"  
                      className="pn-btn"
                      onClick={() => {
                        setbtcplan('BTC-DIAMOND');
                        setbtchashvalue('500TH/s');
                        setbtcvalue('15,300');

                        obj['name'] = plans.btc[0].names[2];
                        obj['price'] = plans.btc[0].prices[2];
                        obj['hashpower'] = plans.btc[0].hashpower[2];

                        onSetOrder(obj);
                      }}
                    >
                   
                        DIAMOND
                     
                   
                   
                    </Button>
                
                </div>

                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  CUSTOM PLAN
                </Typography>
                <p
                  style={{ textAlign: 'center', margin: '3px auto' }}
                >{`${btchashval}`}</p>
                <Divider />
                <p
                  style={{ textAlign: 'center', margin: '3px auto' }}
                >{`${btcval}USD`}</p>
                <div
                  style={{ marginTop: '35px', marginBottom: '13px' }}
                >
                  <AirbnbSlider
                    defaultValue={15500}
                    aria-labelledby="custom"
                    step={50}
                    min={15500}
                    max={50000}
                    ThumbComponent={AirbnbThumbComponent}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </div>
                <Divider dark />
                <div style={{ margin: '15px,0' }}>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    Operational address: Epic-Mining Ltd.,
                    Trinity Chambers, P.O. Box 4301, Road Town,
                    Tortola, British Virgin Islands Payments processed
                    by: Epic Mining Iceland ehf., Company No.
                    521016-0430, Borgartúni 27, 105 Reykjavík, Iceland
                  </Typography>
                </div>
              </Paper>
            </div>
          ) : (
            <div>
              <Paper style={{ padding: '25px' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '15px' }}>
                    <img
                      src={require('../../static/coin.svg')}
                      alt="btc"
                      width="25"
                    />
                  </div>
                  <div>
                    {' '}
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ fontWeight: 'bold' }}
                    >
                      ETHEREUM Radiant Classic - (Limited Offer)
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        SHA-256 Mining Algorithm ?
                      </Typography>
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  STANDARD PLANS
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '15px',
                  }}
                >
                  <Paper>
                    <div
                      className="pn-btn"
                      onClick={() => {
                        setethplan('ETH-GOLD');
                        setethhashvalue('62TH/s');
                        setethvalue('1,999');

                        obj['name'] = plans.eth[0].names[0];
                        obj['price'] = plans.eth[0].prices[0];
                        obj['hashpower'] = plans.eth[0].hashpower[0];

                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                        onSetOrder(obj);
                      }}
                    >
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                      >
                        GOLD
                      </Typography>
                    </div>
                  </Paper>
                  <Paper>
                    <div
                      className="pn-btn"
                      onClick={() => {
                        setethplan('ETH-PLATINUM');
                        setethhashvalue('240TH/s');
                        setethvalue('7,999');
                        obj['name'] = plans.eth[0].names[1];
                        obj['price'] = plans.eth[0].prices[1];
                        obj['hashpower'] = plans.eth[0].hashpower[1];
                        onSetOrder(obj);
                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                      }}
                    >
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                      >
                        PLATINUM
                      </Typography>
                    </div>
                  </Paper>
                  <Paper>
                    <div
                      className="pn-btn"
                      onClick={() => {
                        setethplan('ETH-DIAMOND');
                        setethhashvalue('540TH/s');
                        setethvalue('15,999');

                        obj['name'] = plans.eth[0].names[2];

                        obj['price'] = plans.eth[0].prices[2];
                        obj['hashpower'] = plans.eth[0].hashpower[2];
                        onSetOrder(obj);

                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                        window.localStorage.setItem(
                          'order',
                          JSON.stringify(obj),
                        );
                      }}
                    >
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                      >
                        DIAMOND
                      </Typography>
                    </div>
                  </Paper>
                </div>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  CUSTOM PLAN
                </Typography>
                <p
                  style={{ textAlign: 'center', margin: '3px auto' }}
                >{`${ethhashval}`}</p>
                <Divider />
                <p
                  style={{ textAlign: 'center', margin: '3px auto' }}
                >{`${ethval}USD`}</p>
                <div
                  style={{ marginTop: '35px', marginBottom: '13px' }}
                >
                  <AirbnbSlider
                    className={classes.slider}
                    defaultValue={16500}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={16500}
                    max={50000}
                    ThumbComponent={AirbnbThumbComponent}
                    valueLabelDisplay="on"
                    onChange={handleSliderChangeeth}
                  />
                </div>
                <Divider dark />
                <div style={{ margin: '15px,0' }}>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    Operational address: Epic-Mining Ltd.,
                    Trinity Chambers, P.O. Box 4301, Road Town,
                    Tortola, British Virgin Islands Payments processed
                    by: epic Mining Iceland ehf., Company No.
                    521016-0430, Borgartúni 27, 105 Reykjavík, Iceland
                  </Typography>
                </div>
              </Paper>
            </div>
          )}
        </div>

        <div>
          {
            //prev area
          }
          {btcview ? (
            <div className="prevarea">
              <Button
                variant="contained"
                className={classes.btn}
                onClick={() => {
                  hn();
                }}
              >
                PROCEED REVIEW ORDER
              </Button>
              <Typography variant="h6">summary</Typography>
              <div>
                <TableContainer component={Paper}>
                  <Table
                    className={classes.table}
                    aria-label="simple table"
                  >
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
              </div>
              <Divider />
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '20px 3px',
                  }}
                >
                  <h5>Total:</h5>
                  <h5>{btcval}</h5>{' '}
                </div>
              </div>
              <Divider dark />
              
              <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
          PAYMENT TYPE:
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value22}
            onChange={handleChange22}
          >
            
            <MenuItem value={'btc'}>BITCOIN</MenuItem>
            <MenuItem value={'eth'}>ETHEREUM</MenuItem>
           
          </Select>
        </FormControl>
              
             { /*<FormControl component="fieldset">
      <FormLabel component="legend">PAYMENT TYPE</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value22} onChange={handleChange22}>
        <FormControlLabel value="btc" control={<Radio />} label="BITCOIN" />
        <FormControlLabel value="eth" control={<Radio />} label="ETHEREUM" />
       
      </RadioGroup>
                </FormControl>*/}
            </div>
          ) : (
            <div className="prevarea">
              <Button
                variant="contained"
                className={classes.btn}
                onClick={() => {
                  hn();
                }}
              >
                PROCEED REVIEW ORDER
              </Button>
              <Typography variant="h6">summary</Typography>
              <div>
                <TableContainer component={Paper}>
                  <Table
                    className={classes.table}
                    aria-label="simple table"
                  >
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
                        <TableCell>{ethplan}</TableCell>
                        <TableCell>{ethhashval}</TableCell>
                        <TableCell>{ethval}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <Divider />
              <div>
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
              </div>
              <Divider />
              <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
          PAYMENT TYPE:
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value22}
            onChange={handleChange22}
          >
            
            <MenuItem value={'btc'}>BITCOIN</MenuItem>
            <MenuItem value={'eth'}>ETHEREUM</MenuItem>
           
          </Select>
        </FormControl>
           { /*  <FormControl component="fieldset">
      <FormLabel component="legend">PAYMENT TYPE</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value22} onChange={handleChange22}>
        <FormControlLabel value="btc" control={<Radio />} label="BITCOIN" />
        <FormControlLabel value="eth" control={<Radio />} label="ETHEREUM" />
       
      </RadioGroup>
                </FormControl> */}
            </div>
          )}
        </div>
      </div>
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
)(pickplan);
