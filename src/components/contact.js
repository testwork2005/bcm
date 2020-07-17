import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-slick';
import ForwardIcon from '@material-ui/icons/Forward';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Ticket from "./ticket"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      margin:'0 3%',
      overflowX:"hidden"
      
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    acc:{
      maxWidth:"550px",
      margin:"0 10px",
      marginBottom:"20px"
    }
  }));
export default function contact() {
 const classes=useStyles();
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };
    return (
        <div>
            <header className="header yy">
        <Particles
          width="100px"
          height="70px"
          style={{
            background: `transparent`,
          }}
          params={{
            particles: {
              color: {
                value: '#D4AF37',
              },
              line_linked: {
                enable: true,
                distance: 50,
                color: '#ffff',
                opacity: 1,
                width: 1.5,
              },
            },
          }}
        />
        <div className="header__logo">
          <a href="/" className="a">
            <img
              src={require('../static/home-bg.png')}
              className="img"
              alt=""
            />
          </a>
        </div>

        <ul className="header__nav">
          <li>
            <a href="#" className="a">
              Home{' '}
            </a>
          </li>
          <li>
            <a href="/about" className="a">
              About Us
            </a>
          </li>
          <li>
            <a
              href="https://bitcointicker.co/transactions/"
              className="a"
            >
              Live Payout
            </a>
          </li>
          <li>
            <a href="/pricing" className="a">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contactus" className="a">
            Contact us
            </a>
          </li>
          <li>
            <a href="/whymining" className="a">
              Why Mining
            </a>
          </li>
          {
            //<li className="dropdown header__dropdown">
            //<a
            //  className="dropdown-toggle a"
            //  href="/account"
            //  id="dropdownMenuLink2"
            // >
            //   DashBoard
            //</li></li> </a>}
            //  </li>
          }
          <li class="dropdown header__dropdown">
            <a
              class="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Technology
            </a>

            <ul
              class="dropdown-menu header__dropdown-menu"
              aria-labelledby="dropdownMenuLink1"
            >
              <li>
                <a href="index.html" style={{ color: 'black' }}>
                  Enigma Data center
                </a>
              </li>
              <li>
                <a href="index2.html" style={{ color: 'black' }}>
                  Radiant Tech
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="  hyy header__btns ">
          <a
            href="/signin"
            className=" hyy btn btn--transparent btn--header a"
          >
            log in
          </a>
          <a
            href="/signup"
            className="  hyy btn btn--white btn--header a"
          >
            REGISTER
          </a>
        </div>

        <button className="header__menu button" type="button">
          <i className="ti-menu" />
          <i className="ti-close" />
        </button>
      </header>
      <div className="bgg">
        <h1>Customer Service Center</h1>
       
        <small style={{maxWidth:"600px",margin:"0 auto"}}>What coins can I mine with each algorithm? Browse our customer service directory and receive answers to the most common questions.</small>
      </div>
      <div style={{margin:"120px 60px"}}><h2>Top questions</h2></div>
     <div  style={{display:"flex",justifyContent:"center",maxWidth:"100vw"}}>
          <Paper className={classes.acc}><div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is binance cryptomining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Binance CrpytoMining is a Cryptocurrency cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with complex hardware and software setup. We offer hosted cryptocurrency mining services and a variety of mining related solutions to small and large scale customers. The combination of our algorithmic trading framework, mining infrastructure, and proprietary mining farm-management software, Genesis Hive, quickly made us an industry leader.

Our team of mining experts with extensive knowledge of the digital currency sector specializes in building the most efficient and reliable mining facilities. Genesis Mining is also the founding partner of Logos Fund, the first ever Bitcoin Mining Fund, which targets professional investors looking to gain access to Bitcoin’s and various other digital assets’ potential.

Our service was founded by the end of 2013 and with now over 2.000.000 users we are the world‘s leading multi-algorithm cloud mining service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does bitcoin mining work with Binance CryptoMining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow.

Remark: Every day of mining will be processed and sent to your account in the following 24 hours after the mining day is over.

Please refer to section “When do I get my mining output?” for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div></Paper>
     
       
          <Paper className={classes.acc} ><div className={classes.root}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is binance cryptomining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Binance CrpytoMining is a Cryptocurrency cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with complex hardware and software setup. We offer hosted cryptocurrency mining services and a variety of mining related solutions to small and large scale customers. The combination of our algorithmic trading framework, mining infrastructure, and proprietary mining farm-management software, Genesis Hive, quickly made us an industry leader.

Our team of mining experts with extensive knowledge of the digital currency sector specializes in building the most efficient and reliable mining facilities. Genesis Mining is also the founding partner of Logos Fund, the first ever Bitcoin Mining Fund, which targets professional investors looking to gain access to Bitcoin’s and various other digital assets’ potential.

Our service was founded by the end of 2013 and with now over 2.000.000 users we are the world‘s leading multi-algorithm cloud mining service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does bitcoin mining work with Binance CryptoMining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow.

Remark: Every day of mining will be processed and sent to your account in the following 24 hours after the mining day is over.

Please refer to section “When do I get my mining output?” for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div></Paper>
          </div>
          <div style={{margin:"120px 60px"}}><h2>Frequently asked questions</h2></div>
          <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
         centered
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="My Account" {...a11yProps(0)} />
          <Tab label="Mining outputs" {...a11yProps(1)} />
          <Tab label="Contracts" {...a11yProps(2)} />
          <Tab label="General" {...a11yProps(3)} />
       
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <div  style={{marginLeft:"50px",
      marginTop:"20px"}}><div className={classes.root}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is binance cryptomining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Binance CrpytoMining is a Cryptocurrency cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with complex hardware and software setup. We offer hosted cryptocurrency mining services and a variety of mining related solutions to small and large scale customers. The combination of our algorithmic trading framework, mining infrastructure, and proprietary mining farm-management software, Genesis Hive, quickly made us an industry leader.

Our team of mining experts with extensive knowledge of the digital currency sector specializes in building the most efficient and reliable mining facilities. Genesis Mining is also the founding partner of Logos Fund, the first ever Bitcoin Mining Fund, which targets professional investors looking to gain access to Bitcoin’s and various other digital assets’ potential.

Our service was founded by the end of 2013 and with now over 2.000.000 users we are the world‘s leading multi-algorithm cloud mining service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does bitcoin mining work with Binance CryptoMining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow.

Remark: Every day of mining will be processed and sent to your account in the following 24 hours after the mining day is over.

Please refer to section “When do I get my mining output?” for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div></div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div  style={{marginLeft:"50px",
      marginTop:"20px"}}><div className={classes.root}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is binance cryptomining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Binance CrpytoMining is a Cryptocurrency cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with complex hardware and software setup. We offer hosted cryptocurrency mining services and a variety of mining related solutions to small and large scale customers. The combination of our algorithmic trading framework, mining infrastructure, and proprietary mining farm-management software, Genesis Hive, quickly made us an industry leader.

Our team of mining experts with extensive knowledge of the digital currency sector specializes in building the most efficient and reliable mining facilities. Genesis Mining is also the founding partner of Logos Fund, the first ever Bitcoin Mining Fund, which targets professional investors looking to gain access to Bitcoin’s and various other digital assets’ potential.

Our service was founded by the end of 2013 and with now over 2.000.000 users we are the world‘s leading multi-algorithm cloud mining service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does bitcoin mining work with Binance CryptoMining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow.

Remark: Every day of mining will be processed and sent to your account in the following 24 hours after the mining day is over.

Please refer to section “When do I get my mining output?” for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div></div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div  style={{marginLeft:"50px",
      marginTop:"20px"}}><div className={classes.root}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is binance cryptomining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Binance CrpytoMining is a Cryptocurrency cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with complex hardware and software setup. We offer hosted cryptocurrency mining services and a variety of mining related solutions to small and large scale customers. The combination of our algorithmic trading framework, mining infrastructure, and proprietary mining farm-management software, Genesis Hive, quickly made us an industry leader.

Our team of mining experts with extensive knowledge of the digital currency sector specializes in building the most efficient and reliable mining facilities. Genesis Mining is also the founding partner of Logos Fund, the first ever Bitcoin Mining Fund, which targets professional investors looking to gain access to Bitcoin’s and various other digital assets’ potential.

Our service was founded by the end of 2013 and with now over 2.000.000 users we are the world‘s leading multi-algorithm cloud mining service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does bitcoin mining work with Binance CryptoMining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow.

Remark: Every day of mining will be processed and sent to your account in the following 24 hours after the mining day is over.

Please refer to section “When do I get my mining output?” for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div></div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div  style={{marginLeft:"50px",
      marginTop:"20px"}}><div className={classes.root}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is binance cryptomining</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Binance CrpytoMining is a Cryptocurrency cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with complex hardware and software setup. We offer hosted cryptocurrency mining services and a variety of mining related solutions to small and large scale customers. The combination of our algorithmic trading framework, mining infrastructure, and proprietary mining farm-management software, Genesis Hive, quickly made us an industry leader.

Our team of mining experts with extensive knowledge of the digital currency sector specializes in building the most efficient and reliable mining facilities. Genesis Mining is also the founding partner of Logos Fund, the first ever Bitcoin Mining Fund, which targets professional investors looking to gain access to Bitcoin’s and various other digital assets’ potential.

Our service was founded by the end of 2013 and with now over 2.000.000 users we are the world‘s leading multi-algorithm cloud mining service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How does bitcoin mining work with Binance CryptoMining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It’s quick and very easy! As soon as we receive your payment your contract will be added to your profile, and you can immediately start mining. Depending on the blockchain algorithm you select and the associated mining service agreement you enter into, you can either mine native cryptocurrencies directly or allocate your hashpower to other cryptocurrencies (marked with AUTO), and even choose a specific allocation for them. For example: 60% LTC, 20% BTC and 20% DOGE. The first mining output is released after 48 hours, and then a daily mining output will follow.

Remark: Every day of mining will be processed and sent to your account in the following 24 hours after the mining day is over.

Please refer to section “When do I get my mining output?” for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What is the mining performance? Why are you not mining yourself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides the fact that we ourselves mine with the very same hardware that we offer to our clients, our capital is limited. We believe that Bitcoin and Altcoin mining is one of the best ways to receive Cryptocurrencies, however, we do not want to “put all our eggs in one basket”.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div></div>
      </TabPanel>
     
      
    </div>
    <div style={{margin:"30px 60px"}}><h2>Contact Customer Service</h2></div>
    <div style={{margin:"10px 60px",backgroundColor:"gray",padding:"10px",maxWidth:"400px"}}><p>Keep in mind that the quality and promptness of our response depends on how accurately you fill out the Contact form. Our drop down menu has several options, and if the wrong topic is used, it can delay the resolution of the ticket.

We are looking forward to hearing from you!</p></div>
<div style={{margin:"30px 60px"}}><Ticket/></div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="footer__logo">
                <a href="index.html" className="a">
                  <img
                    src={require('../static/home-bg.png')}
                    className="img"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <h6 className="footer__title">Features</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="#" className="a">
                    Instant connection
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Instant conclusion
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Detailed statistics
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Power distribution
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="#" className="a">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="footer__title">Contact</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="tel:+18002345678">+1 (800) 234-5678</a>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="footer__copyright">
                <ul className="ul">
                  <li>
                    <a href="#" className="a">
                      About BinanceCrypto Mine
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
