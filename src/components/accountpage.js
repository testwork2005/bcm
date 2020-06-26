import React from 'react';
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

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    backgroundColor: '#54565',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginBottom: '-100px' }}>
      <AppBar
        position="static"
        style={{
          background:
            '(190deg, rgba(255,194,4,1) 0%, rgba(0,92,208,1) 0%, rgba(45,171,253,1) 100%)',
        }}
      >
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
            label="payouts"
            icon={<CreditCardOutlinedIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label="Upgrade Plan"
            icon={<ArrowDropUpOutlinedIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <img src={minegif} alt="loading..." width="250px" />
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
