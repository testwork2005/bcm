import React from 'react';
import { withFirebase } from '../components/Firebase';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ShopTwoOutlinedIcon from '@material-ui/icons/ShopTwoOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import createTypography from '@material-ui/core/styles/createTypography';
import minegif from '../static/Mining.gif';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import QRCode from 'qrcode.react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import MuiAlert from '@material-ui/lab/Alert';

import Title from './Title';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    backgroundColor: 'black',
    color: 'yellow',
  },
  depositContext: {
    flex: 1,
  },
  paper: {
    backgroundColor: 'black',
    minWidth: '500px',
    padding: '20px',
    color: 'yellow',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function NavTabs({ authUser }) {
  const classes = useStyles();
  const User = authUser;
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(User.balance);
  const profit = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(User.profit);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ marginBottom: '-100px' }}>
      <AppBar position="static" className={classes.root}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab
            label="Dashboard"
            icon={<DashboardOutlinedIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label="Orders"
            icon={<ShopTwoOutlinedIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Withdrawals"
            icon={<CreditCardOutlinedIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label="Upgrade Hash Power"
            icon={<ArrowDropUpOutlinedIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '0 10%',
            flexDirection: 'row-reverse',
          }}
        >
          <div
            style={{
              minWidth: '500px',
              border: '1px solid yellow',
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {User.ismining && (
              <div className="lds-circle">
                <div />
              </div>
            )}
            <img
              src={minegif}
              alt="loading..."
              width="80px"
              height="80px"
            />
            {User.ismining && (
              <h4>Mining Started .. Currently at 400 TH/s</h4>
            )}
            {!User.ismining && (
              <Alert severity="error">
                Mining Stopped pls upgrade your plan /Fund you Account
                to continue!
              </Alert>
            )}
          </div>
          <div
            style={{
              minWidth: '500px',
              border: '1px solid yellow',
              backgroundColor: 'black',
            }}
          >
            <Paper className={classes.paper}>
              <Title>{User.username}</Title>
              <Typography className={classes.depositContext}>
                {User.email}
              </Typography>
              <Title>Account Balance</Title>
              <Typography component="p" variant="h4">
                {` ${amount}`}
              </Typography>
              <Typography className={classes.depositContext}>
                Current HashPower:{User.hashpower}TH/s
              </Typography>
              <div>
                <Typography>Net Profit:-{profit} </Typography>
              </div>
              <button
                class="btn btn--center"
                type="button"
                href="/account"
                onClick={handleClickOpen}
              >
                Fund Wallet
              </button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {'Wallet ID'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Scan this wallet Id/Copy this address and send
                    your payments and we will approve shortly
                  </DialogContentText>
                  <QRCode value="1BoD1hBgwm74F2Q7h9NbY1KtBbV9VrvskZ" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" >
                    CLOSE
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Page Three
      </TabPanel>
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
)(NavTabs);
