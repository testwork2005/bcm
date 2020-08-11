import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Personal from './profile';
import Password from '../PasswordChange';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { withFirebase } from '../Firebase';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 500,
  },
}));

function FullWidthTabs({ firebase, auth }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [eth, seteth] = React.useState('');
  const [btc, setbtc] = React.useState('');

  React.useEffect(() => {
    if (!!auth.ethwallet) {
      seteth(auth.ethwallet);
    }
    if (!!auth.btcwallet) {
      setbtc(auth.btcwallet);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="GENERAL INFORMATION" {...a11yProps(0)} />
          <Tab label="CHANGE PASSWORD" {...a11yProps(1)} />
          <Tab label="WALLETS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Personal auth={auth} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Password />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <div
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <div>
            <Typography variant="h6" gutterBottom>
              Bitcoin
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
            >
              You don’t have a Dash wallet yet?{' '}
              <a
                href="https://bitcoin.org/en/getting-started"
                target="_blank"
              >
                Click here
              </a>{' '}
              to get started!
            </Typography>
            <TextField
              id="outlined-basic"
              label="btc wallet"
              value={btc}
              variant="outlined"
              onChange={e => {
                setbtc(e.target.value);
              }}
            />
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Ethereum
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
            >
              You don’t have a Ethereum wallet yet?{' '}
              <a
                href="https://www.myetherwallet.com/"
                target="_blank"
              >
                Click here
              </a>{' '}
              to get started!
            </Typography>
            <TextField
              id="outlined-basic"
              label="eth wallet"
              variant="outlined"
              value={eth}
              onChange={e => {
                seteth(e.target.value);
              }}
            />
          </div>
        </div>
        <Button variant='contained'
     
        style={{float:'right',backgroundColor:'#f0b90b'}}
          onClick={() => {
            firebase
              .user(auth.uid)
              .update({
                ethwallet: eth,
                btcwallet: btc,
              })
              .then(() => {
                alert('wallets updated successfully');
              })
              .catch(() => {
                alert('something went wrong! unable to update');
              });
          }}
        >
          Update wallets
        </Button>
      </TabPanel>
    </div>
  );
}
export default withFirebase(FullWidthTabs);
