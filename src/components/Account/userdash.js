import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import OfflineBoltSharpIcon from '@material-ui/icons/OfflineBoltSharp';
import StorageSharpIcon from '@material-ui/icons/StorageSharp';
import { withFirebase } from '../Firebase';
import Atable from './activitytable';
import Dt from './profilecontainer';
import Kyc from './kyc';
import Ticket from '../ticket';
import Orders from './orders';
import With from './withdrawals';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Hashpower from './buystepper';
import UHashpower from './upgrade';
import Signout from '../../components/SignOut';
import Nt from './notification';
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  badge: {
    float: 'right',
    color: 'yellow',
    float: 'right',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  list: {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
    fontFamily: 'times new roman',
    fontWeight: 'bold',
    paddingTop: '50px',
  },
  tool: {
    display: 'flex',
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  icon: {
    color: 'yellow',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dash(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', minWidth: '40%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            height: '200px',
            backgroundColor: 'black',
            margin: '0 auto',
            justifyContent: 'center',
            color: 'white',
            margin: '3px',
          }}
        >
          <div style={{ margin: '0 auto' }}>
            <OfflineBoltSharpIcon className={classes.icon} />
          </div>

          <h1 style={{ margin: '0 auto' }}>{`${
            props.auth.hashpower
          } TH/s`}</h1>

          <div style={{ margin: '0 auto' }}>
            ---------------------
          </div>
          <h4 style={{ margin: '0 auto' }}>
            BITCOIN <br /> HASHRATE
          </h4>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            height: '200px',
            backgroundColor: 'black',
            margin: '0 auto',
            justifyContent: 'center',
            color: 'white',
            margin: '3px',
          }}
        >
          <div style={{ margin: '0 auto' }}>
            <OfflineBoltSharpIcon className={classes.icon} />
          </div>

          <h1 style={{ margin: '0 auto' }}>{`${
            props.auth.ethhashpower
          } TH/s`}</h1>

          <div style={{ margin: '0 auto' }}>
            ---------------------
          </div>
          <h4 style={{ margin: '0 auto' }}>
            ETHEREUM <br /> HASHRATE
          </h4>
        </div>
      </div>
      <div style={{ minWidth: '50%' }}>
        <Atable btcbalance="3000" ethbalance="4000" />
      </div>
    </div>
  );
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [currentview, setview] = React.useState(0);
  const [color, setcolor] = React.useState('white');
  const [page, setpage] = React.useState('Dashboard');
const [show,setshow]=React.useState('');
const[not,setnot]=React.useState(0);
React.useEffect(()=>{
  var hi=0
if(!!props.authUser.messages)
{hi= Object.entries(props.authUser.messages).length;
setnot(hi)}
},[])
const toggler=()=>{
  if(show==="show"){
    setshow('');
setnot(0)
  }
  else
  setshow('show')
}
  const toggleview = () => {
    switch (currentview) {
      case 0:
        return (
          <div>
            <Dash auth={props.authUser} />
            <div
              style={{
                padding: '20px',
                margin: '15px auto',
                backgroundColor: 'black',
                color: color,
                fontWeight: 'bold',
                maxWidth: '250px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onMouseOver={() => {
                setcolor('yellow');
              }}
              onClick={() => {
                setview(4);
              }}
            >
              <div style={{ marginRight: '0px' }}>
                <OfflineBoltSharpIcon className={classes.icon} />
              </div>
              BUY MORE HASHPOWER
            </div>
          </div>
        );
        break;
      case 1:
        return (
          <div>
            <Dt style={{ margin: '0 auto' }} auth={props.authUser}  />
          </div>
        );
        break;
      case 2:
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <h1>CONTACT</h1>
                <p style={{ maxWidth: '300px' }}>
                  Keep in mind that the quality and promptness of our
                  response depends on how accurately you fill out the
                  Contact form. Our drop down menu has several
                  options, and if the wrong topic is used, it can
                  delay the resolution of the ticket. We are looking
                  forward to hearing from you!
                </p>
                <Ticket />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '300px',
                }}
              >
                <h3>General information</h3>
                <h5>Our office</h5>
                <p>
                  Epic-Mining Services Ltd. Trinity Chambers, P.O. Box
                  6789, Road Town, Tortola, British Virgin Islands
                </p>
                <br />
                <h5>Customer Service</h5>
                <br />
                <p>
                  Email: contact@epic-mining.com Average response
                  time: within 1 business day. However, depending on
                  the volume of requests, the response time may
                  occasionally be longer. Check out our Customer
                  Service section
                </p>
              </div>
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <Orders />
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <Hashpower />
          </div>
        );
        break;
      case 5:
        return (
          <div>
            <UHashpower />
          </div>
        );
        break;
      case 6:
        return (
          <div>
            <With />
          </div>
        );
        break;
      case 7:
        return (
          <div>
            <Kyc />
          </div>
        );
        break;
      default:
        return <div>account setting</div>;
    }
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div
        style={{
          backgroundColor: 'black',
          height: '120px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <img
          src={require('../../static/home-bg.png')}
          width="100"
          alt=""
          style={{ margin: '0 auto' }}
        />
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem
          button
          onClick={() => {
            setview(0);
            setpage('Dashboard');
          }}
        >
          <ListItemIcon className={classes.icon}>
            <DashboardOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="DASHBOARD" />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="MY ACCOUNT" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              onClick={() => {
                setview(1);
                setpage('Account details');
              }}
              className={classes.nested}
            >
              <ListItemIcon className={classes.icon}>
                <StarBorder className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="SETTINGS" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setview(2);
                setpage('Customer Service');
              }}
              className={classes.nested}
            >
              <ListItemIcon className={classes.icon}>
                <StarBorder className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="CUSTOMER SERVICE" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={() => {
            setview(3);
            setpage('My orders');
          }}
        >
          <ListItemIcon className={classes.icon}>
            <DashboardOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="MY ORDERS" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <DashboardOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              setview(4);
              setpage('Buy hashpower');
            }}
            primary="BUY HASHPOWER"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <DashboardOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              setview(5);
              setpage('Upgrade Hashpower');
            }}
            primary="UPGRADE HASHPOWER"
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setview(6);
            setpage('My withdrawals');
          }}
        >
          <ListItemIcon className={classes.icon}>
            <DashboardOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="MY WITHDRAWALS" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.tool}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <h4>{page}</h4>
          </div>

          <IconButton
            aria-label="show 11 new notifications"
            color="inherit"
            onClick={()=>{
              if(show==="show"){
                setshow('');

              }
              else
              setshow('show')
            }}
          >
            <Badge badgeContent={not} color="secondary" edge="right">
              <NotificationsIcon className={classes.badge} />
            </Badge>
          </IconButton>
          <div style={{ float: 'right' }}>
            {' '}
            <Signout />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          {' '}
          i go do the rest i never finish. no worry.
        </div>
        <div
          onClick={() => {
            setview(7);
          }}
        >
          <Alert
            severity="info"
            style={{
              marginTop: '20px',
              backgroundColor: 'white',
              color: 'black',
              cursor: 'pointer',
            }}
          >
            to be verified click here and upload KYC documents!
          </Alert>{' '}
        </div>

        <br />
        <div className={`notcontainer ${show} `} ><Nt toggler={toggler} messages={props.authUser.messages} /></div>
        
        {toggleview()}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

const condition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),
  withFirebase,
  //withAuthorization(condition),
  //withEmailVerification,
)(ResponsiveDrawer);
