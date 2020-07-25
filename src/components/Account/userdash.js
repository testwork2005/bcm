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
import Ticket from '../ticket';
import Orders from './orders';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Hashpower from './buystepper';
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
    marginLeft: '60vw',
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

function Dash() {
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

          <h1 style={{ margin: '0 auto' }}>400 TH/s</h1>

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

          <h1 style={{ margin: '0 auto' }}>400 TH/s</h1>

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
  const toggleview = () => {
    switch (currentview) {
      case 0:
        return (
          <div>
            <Dash />
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
            <Dt style={{ margin: '0 auto' }} />
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <Ticket />
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
          height: '100px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        welcome back
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem
          button
          onClick={() => {
            setview(0);
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
            }}
            primary="BUY HASHPOWER"
          />
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={require('../../static/home-bg.png')}
            height="100"
            alt=""
          />

          <IconButton
            aria-label="show 11 new notifications"
            color="inherit"
          >
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon className={classes.badge} />
            </Badge>
          </IconButton>
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
        <Alert
          severity="error"
          style={{
            marginTop: '20px',
          }}
        >
          to be verified go <a href="">here</a> and upload KYC
          documents!
        </Alert>
        <br />
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
)(ResponsiveDrawer);
