import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
  slider: {
    color: '#f0b90b',
  },
  table: {
    minWidth: '400px',
  },
}));

const marks = [
  {
    value: 20500,
    label: '20,500 EUR',
  },

  {
    value: 50000,
    label: '5000EUR',
  },
];

function valuetext(value) {
  return `${value}°C`;
}


export default function pickplan() {
  const [btcview, setbtc] = React.useState(true);
  const [btcplan, setbtcplan] = React.useState('');
  const [ethplan, setethplan] = React.useState('');
  const [value, setValue] = React.useState(20500);
  const [btcval, setbtcvalue] = React.useState(0);
  const [ethval, setethvalue] = React.useState(0);
  const [btchashval, setbtchashvalue] = React.useState(0);
  const [ethhashval, setethhashvalue] = React.useState(0);
  const[order,setorder]=React.useState({});
 
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSliderChange = (event, newValue) => {
    setbtcplan('BTC-CUSTOM');
    setbtchashvalue(`${Math.round(newValue / 192)}TH/s`);
    setbtcvalue(`${newValue}`);
  };
  const handleSliderChangeeth = (event, newValue) => {
    setethplan('ETH-CUSTOM');
    setethhashvalue(`${Math.round((newValue + 1000) / 192)}TH/s`);
    setethvalue(`${newValue + 1000}`);
  };
  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'center' }}>
        <button
          onClick={e => {
            e.preventDefault();
            setbtc(true);
          }}
        >
          Bitcoin Mining
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            setbtc(false);
          }}
        >
          Ethereum Mining
        </button>
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
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'black',
                      color: '#f0b90b',
                      margin: '0 3px',
                      minWidth: '80px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setbtcplan('BTCGOLD');
                      setbtchashvalue('4TH/s');
                      setbtcvalue('2,999');
                      window.localStorage.setItem("order")
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
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'black',
                      color: '#f0b90b',
                      margin: '0 5px',
                      minWidth: '80px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setbtcplan('BTC-PLATINUM');
                      setbtchashvalue('20TH/s');
                      setbtcvalue('9,999');
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
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'black',
                      color: '#f0b90b',
                      margin: '0 5px',
                      minWidth: '80px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setbtcplan('BTC-DIAMOND');
                      setbtchashvalue('104TH/s');
                      setbtcvalue('20,999');
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
                </div>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  CUSTOM PLAN
                </Typography>
                <div
                  style={{ marginTop: '35px', marginBottom: '13px' }}
                >
                  <Slider
                    className={classes.slider}
                    defaultValue={25000}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={20500}
                    max={50000}
                    valueLabelDisplay="on"
                    onChange={handleSliderChange}
                  />
                </div>
                <Divider dark />
                <div style={{ margin: '15px,0' }}>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    Operational address: Binance CryptoMining Ltd.,
                    Trinity Chambers, P.O. Box 4301, Road Town,
                    Tortola, British Virgin Islands Payments processed
                    by: Genesis Mining Iceland ehf., Company No.
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
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'black',
                      color: '#f0b90b',
                      margin: '0 3px',
                      minWidth: '80px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setethplan('ETH-GOLD');
                      setethhashvalue('4TH/s');
                      setethvalue('3,999');
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
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'black',
                      color: '#f0b90b',
                      margin: '0 5px',
                      minWidth: '80px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setethplan('ETH-PLATINUM');
                      setethhashvalue('20TH/s');
                      setethvalue('10,999');
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
                  <div
                    style={{
                      padding: '10px',
                      backgroundColor: 'black',
                      color: '#f0b90b',
                      margin: '0 5px',
                      minWidth: '80px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      setethplan('ETH-DIAMOND');
                      setethhashvalue('104TH/s');
                      setethvalue('21,999');
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
                </div>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  CUSTOM PLAN
                </Typography>
                <div
                  style={{ marginTop: '35px', marginBottom: '13px' }}
                >
                  <Slider
                    className={classes.slider}
                    defaultValue={25000}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={20500}
                    max={50000}
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
                    Operational address: Binance CryptoMining Ltd.,
                    Trinity Chambers, P.O. Box 4301, Road Town,
                    Tortola, British Virgin Islands Payments processed
                    by: Genesis Mining Iceland ehf., Company No.
                    521016-0430, Borgartúni 27, 105 Reykjavík, Iceland
                  </Typography>
                </div>
              </Paper>
            </div>
          )}
        </div>

        <div className="prevarea">
          {
            //prev area
          }
          {btcview ? (
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
                  }}
                >
                  <h5>Total:</h5>
                  <h5>{btcval}</h5>{' '}
                </div>
                <Divider dark />
              </div>
              <h5>Payment type: <br/> BITCOIN </h5>
            </div>
          ) : (
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
              <h5>Payment type: <br/> BITCOIN</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
