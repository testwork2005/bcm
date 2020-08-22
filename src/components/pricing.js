import React from 'react'
import Header from "../components/header"
import Particles from "react-particles-js"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Review from './reviewcontainer';
import Footer from '../components/Landing/footer';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },table: {
    minWidth: 450,
  },
  head:{
    backgroundColor:'black',
    fontWeight:'bold',
    color:'white'
  },
  tick:{
    color:'green',
    margin:"0 10px"
  }
  ,cross:{
    color:'red',
    margin:"0 10px"
  },
  time:{
    color:"#f0b90b",
    margin:'0 10px'
  }
});
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
export default function pricing() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [input,Setval]= React.useState(15500)
    const [input2,Setval2]= React.useState(16500)
    return (
        <div>
          <Review/>
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
            className="img smaller"
            alt=""
          />
        </a>
      </div>

      <ul className="header__nav">
        
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
       Customer Service
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
              <a href="/enigma" style={{color:"black"}}>Enigma Data center</a>
            </li>
            <li>
              <a href="/radiant-tech" style={{color:"black"}}>Radiant Tech</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="  hyy header__btns ">
        <a
          href="/account"
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
           
				
				<div className="bgg" style={{ height: '60vh' }} >
					<h2 >Pricing</h2>
					<p >The fair approach to cloud mining pay as you mine without upfront payments</p>
				</div>
			
		
	
	<section class="section">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-money"></i>
						<h3 class="feature__title">Start with 0.005 BTC</h3>
						<p class="feature__text">Minimum order price is 0.005 BTC for every algorithm.</p>
					</div>
					
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-shield"></i>
						<h3 class="feature__title">No contracts, no risk</h3>
						<p class="feature__text">Cancel at any time and get your remaining funds back with no cancellation fee.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-rocket"></i>
						<h3 class="feature__title">Fast delivery</h3>
						<p class="feature__text">Massive hashing power in a short amount of time.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-thumb-up"></i>
						<h3 class="feature__title">Mine on your favorite pool</h3>
						<p class="feature__text">You decide how and when you want to buy hashing power and which pool to direct it to.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-pulse"></i>
						<h3 class="feature__title">Real-time statistics</h3>
						<p class="feature__text">Follow your workers and their performance.</p>
					</div>
				
				</div>

				<div class="col-12 col-sm-6 col-xl-4">
				
					<div class="feature">
						<i class="ti-check-box"></i>
						<h3 class="feature__title">Valid shares only</h3>
						<p class="feature__text">Never pay for dead, faulty configured rigs or invalid shares.</p>
					</div>
					
				</div>
			</div>
		</div>
	</section>
  <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          
          
          centered
        >
          <Tab label="BTC" {...a11yProps(0)} />
          <Tab label="ETH" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <section class="section section--border-top">
		<div class="container">
			<div class="row">
			
				<div class="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
					<h2 class="section__title">Current BTC prices</h2>
					<p class="section__text">that guarantee you some hashing power</p>
				</div>
			
			</div>

			<div class="row">
				<div class="col-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
				
					<div class="price">
            <div style={{backgroundColor:'black',color:'white', height:'35px',fontWeight:'bold',}}>Back in stock (limited Offfer)</div>
						<h2 class="price__title">GOLD</h2>
            <small>starter</small>
						<ul class="price__list">
							<li><h3>40 TH/s</h3> </li>
							<li><b>30 Months Bitcoin Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$1,500</span>
						
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
<div style={{margin:'15px auto'}}><small>highly rated by our user,perfect starting options</small> </div>
					</div>
				
					<div class="price">
          <div style={{backgroundColor:'black', height:'35px',color:'white',fontWeight:'bold',}}>Back in stock (limited Offfer)</div>
			
          <h2 class="price__title">PLATINUM</h2>
            <small>best buy</small>
						<ul class="price__list">
							<li><h3>200 TH/s</h3> </li>
							<li><b>30 Months Bitcoin Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$7,500</span>
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
<div style={{margin:'15px auto'}}><small>highly rated by our users,faster mining option,faster results</small> </div>
	
					</div>
				
					<div class="price ">
          <div style={{backgroundColor:'black', height:'35px',color:'white',fontWeight:'bold',}}>Back in stock (limited Offfer)</div>
			
          <h2 class="price__title">DIAMOND</h2>
            <small>professional</small>
						<ul class="price__list">
							<li><h3>500 TH/s</h3> </li>
							<li><b>30 Months Bitcoin Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$15,300</span>
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
						<a class="btn btn--center" type="button" href="/account">Buy now</a>
            <div style={{margin:'15px auto'}}><small>highly rated by our users,huge earnings in a short period</small> </div>
	
					</div>
					

					
					<div class="price">
          <div style={{backgroundColor:'black', height:'35px',color:'white',fontWeight:'bold',}}>Back in stock (limited Offfer)</div>
			
						<h2 class="price__title">CUSTOM</h2>
            <small>create a custom  btc plan</small>
						<ul class="price__list">
						<li><h3>{`${Math.round(Number(input)/28)}` }TH/s</h3> </li>
							<li><b>30 Months Bitcoin Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						
						</ul>
						<span class="price__value">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input).replace(/\D00$/, '')}</span>
				
                        <div className="slidecontainer">
  <input type="range" min="15500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
<div style={{margin:'15px auto'}}><small>highly rated by our verified users,recommended for pro miners</small> </div>
	
					</div>
					
				</div>
			</div>
		</div>
	</section>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <section class="section section--border-top">
		<div class="container">
			<div class="row">
			
				<div class="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
					<h2 class="section__title">Current ETH prices</h2>
					<p class="section__text">that guarantee you some hashing power</p>
				</div>
			
			</div>

			<div class="row">
				<div class="col-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
				
					<div class="price">
            <div style={{backgroundColor:'black',color:'white', height:'35px',fontWeight:'bold',}}>Back in stock (limited Offfer)</div>
						<h2 class="price__title">GOLD</h2>
            <small>starter</small>
						<ul class="price__list">
							<li><h3>62 TH/s</h3> </li>
							<li><b>30 Months Ethereum Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$1,999</span>
						
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
<div style={{margin:'15px auto'}}><small>highly rated by our users,perfect starting options</small> </div>
	
					</div>
				
					<div class="price">
          <div style={{backgroundColor:'black', height:'35px',color:'white',fontWeight:'bold',}}>Back in stock (limited Offfer)</div>
			
          <h2 class="price__title">PLATINUM</h2>
            <small>best buy</small>
						<ul class="price__list">
							<li><h3>240 TH/s</h3> </li>
							<li><b>30 Months Ethereum Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$7,999</span>
                        <div className="slidecontainer hide">
  <input type="range" min="20500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
<div style={{margin:'15px auto'}}><small>highly rated by our users,our seasoned miners love this plan</small> </div>
	
					</div>
				
					<div class="price ">
          <div style={{backgroundColor:'black', height:'35px',color:'white',fontWeight:'bold'}}>Back in stock (limited Offfer)</div>
			
          <h2 class="price__title">DIAMOND</h2>
            <small>professional</small>
						<ul class="price__list">
							<li><h3>540 TH/s</h3> </li>
							<li><b>30 Months Ethereum Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						</ul>
						<span class="price__value">$15,999</span>
                        <div className="slidecontainer hide">
  <input type="range" min="15500" max="50000" value={input} className="slider" id="myRange" onInput={(e)=>{Setval(e.target.value)}}/>
</div>
						<a class="btn btn--center" type="button" href="/account">Buy now</a>
            <div style={{margin:'15px auto'}}><small>highly rated by our users,huge earnings in a short period</small> </div>
	
					</div>
					

					
					<div class="price">
          <div style={{backgroundColor:'black', height:'35px',color:'white',fontWeight:'bold'}}>Back in stock (limited Offfer)</div>
			
						<h2 class="price__title">CUSTOM</h2>
            <small>create a custom  eth plan</small>
						<ul class="price__list">
						<li><h3>{`${Math.round((Number(input2)+1000)/28)}` } TH/s</h3> </li>
							<li><b>30 Months Ethereum Mining:</b> </li>
							<li><b>SHA-256 Mining Algorithm</b></li>
							<li>Maintenance Fees apply</li>
							<li><b>1 year</b></li>
						
						</ul>
						<span class="price__value">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input2).replace(/\D00$/, '')}</span>
				
                        <div className="slidecontainer">
  <input type="range" min="16500" max="50000" value={input2} className="slider" id="myRange" onInput={(e)=>{Setval2(e.target.value)}}/>
</div>
<a class="btn btn--center" type="button" href="/account">Buy now</a>
<div style={{margin:'15px auto'}}><small>highly rated by our verified users,recommended for pro miners</small> </div>
	
					</div>
					
				</div>
			</div>
		</div>
	</section>
      </TabPanel>
      
    </div>
    <Paper elevation={3}><div style={{textAlign:"center"}}><AccessTimeIcon className={classes.time}/><h2 style={{textAlign:"center",fontSize:"30px"}}> Contract Term</h2>
    <p style={{maxWidth:'800px',margin:'20px auto'}}>
30 months of guaranteed runtime

Your mining services will run for 30 months, period - even in cases where your daily mining reward falls below the Maintenance Fees. This way, you will always have the potential to produce cryptocurrencies as market conditions improve.

The daily mining outputs are variable and are determined by these factors: the mining difficulty, the Bitcoin vs USD exchange rates, the Maintenance Fee (electricity, cooling, development, and servicing costs), and the technology used for mining. The first two factors are unpredictable and we can not control them, but we always deploy state of the art mining technology, and do our best to keep our data centers running at their maximum capability for you. You can find more in-depth information in our Customer Service Center
</p></div></Paper>
    
 
    <h2 style={{textAlign:"center",fontSize:"30px"}}>Bitcoin Mining Cost and Benefits Comparison Chart</h2>
<p style={{textAlign:"center",margin:"20px 0"}}>A chart to compare the costs and benefits of having your own hardware to having a contract with   Epic-Mining</p>
	<Paper elevation={3} style={{width:'fit-content',margin:'0 auto', marginBottom:'3%'}}>
<div style={{display:'flex',flexDirection:'column'}}>
<div style={{display:'flex' ,justifyContent:'center',textAlign:'center'}}>
  <div>

  <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.head}>Costs of a contract with   Epic-Mining</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell component="th" scope="row">
              One-time price of purchasing the contract <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div> 
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
              No extra fee <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
              No extra fee <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow>
           <TableRow >
              <TableCell component="th" scope="row">
              Best electricity rates possible. <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow> 
            <TableRow >
              <TableCell component="th" scope="row">
              You start mining immediately! <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow> 
            <TableRow >
              <TableCell component="th" scope="row">
              We guarantee 100% uptime and cover system downtimes by using our own miners <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow> 
            <TableRow >
              <TableCell component="th" scope="row">
              No extra fee <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow> <TableRow >
              <TableCell component="th" scope="row">
              No extra fee <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
              No extra fee <div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                    Hardware is at a remote location
<div style={{float:'right'}}><DoneIcon className={classes.tick}/></div>
              </TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  <div><TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.head}>Costs and externalities of having your own hardware</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell align='right' component="th" scope="row">
              Price of the hardware <div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell align='right' component="th" scope="row">
              Shipping costs <div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow><TableRow >
              <TableCell align='right' component="th" scope="row">
              Usually high electricity rates <div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow><TableRow >
              <TableCell align='right' component="th" scope="row">
              Waiting for delivery - you are losing days,even weeks of mining time <div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow><TableRow >
              <TableCell align='right' component="th" scope="row">
              Loss of mining time due to system downtimes <div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow><TableRow >
              <TableCell align='right' component="th" scope="row">
              Electricity consumption of additional equipment<div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell align='right' component="th" scope="row">
              Electricity consumption of additional equipment<div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow> <TableRow >
              <TableCell align='right' component="th" scope="row">
              Cost of cooling<div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell align='right' component="th" scope="row">
             Excessive heat<div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow>
            <TableRow >
              <TableCell align='right' component="th" scope="row">
             Loud noises<div style={{float:'left'}}><ClearIcon className={classes.cross}/></div>
              </TableCell>
             
            </TableRow>

           
        </TableBody>
      </Table>
    </TableContainer></div>
</div>
</div>

  </Paper>
  <Footer />
     

        </div>
    )
}
