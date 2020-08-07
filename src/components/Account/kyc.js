import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withFirebase } from '../Firebase';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Particles from 'react-particles-js';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '100px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 450,
    marginTop: '15px',
  },
  success: {
    minWidth: '250px',
    color: 'green',
    margin: '0 auto',
  },
}));

function Fin() {
  const classes = useStyles();
  const [showload, setshow] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 5000);
    // free memory when ever this component is unmounted
  }, []);

  return (
    <div>
      <header className="header">
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
              src={require('../../static/home-bg.png')}
              className="img"
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
                <a href="/enigma" style={{ color: 'black' }}>
                  Enigma Data center
                </a>
              </li>
              <li>
                <a href="/radiant-tech" style={{ color: 'black' }}>
                  Radiant Tech
                </a>
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
      {!showload && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            flexDirection: 'column',
          }}
        >
          <CheckCircleIcon className={classes.success} />
          <h2 style={{ textAlign: 'center' }}>SUCCESS</h2>
          <p style={{ textAlign: 'center' }}>
            verification status will automatically be updated
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.location.href = '/account';
            }}
          >
            Back to Dashboard
          </Button>
        </div>
      )}
      {showload && (
        <div>
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
          </div>
          <p style={{ textAlign: 'center' }}>
            submitting documents...
          </p>
        </div>
      )}
    </div>
  );
}
function getSteps() {
  return ['Proof of Identiity', 'Selfie', 'Proof of Residence'];
}

function getStepContent(stepIndex, hn, hb) {
  const classes = useStyles();
  const [files, setFiles] = React.useState([]);
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();
  const [preview2, setPreview2] = React.useState();
  const [preview3, setPreview3] = React.useState();
  const [preview4, setPreview4] = React.useState();
  const [preview5, setPreview5] = React.useState();
  const [preview6, setPreview6] = React.useState();
  const [preview7, setPreview7] = React.useState();
  const [canshow, setcanshow] = React.useState(true);
  const [id, setid] = React.useState('passport');
  const handleChange = event => {
    setid(event.target.value);
    setcanshow(true);
  };
  React.useEffect(
    () => {
      if (!selectedFile) {
        setPreview(undefined);
       
        return;
      }

      const objectUrl = URL.createObjectURL(selectedFile);
      if (id == 'passport') {
        setPreview(objectUrl);
        setcanshow(false);
      }
      if (id == 'driverf') {
        setPreview2(objectUrl);
        setcanshow(false);
      }
      if (id == 'driverb') {
        setPreview3(objectUrl);
        setcanshow(false);
      }
      if (id == 'Id Cardf') {
        setPreview4(objectUrl);
        setcanshow(false);
      }
      if (id == 'Id Cardb') {
        setPreview5(objectUrl);
        setcanshow(false);
      }
      if (id == 'self') {
        setPreview6(objectUrl);
        setcanshow(false);
      }
      if (id == 'doc') {
        setPreview7(objectUrl);
        setcanshow(false);
      }

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    },
    [selectedFile],
  );

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  switch (stepIndex) {
    case 0:
      return (
        <div style={{ margin: '0 10%' }}>
          <FormControl
            component="fieldset"
            style={{ margin: '0 auto' }}
          >
            <FormLabel component="legend">
              choose identification type
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              row
              name="gender1"
              value={id}
              onChange={handleChange}
            >
              <FormControlLabel
                value="passport"
                control={<Radio />}
                label="passport"
              />
              <FormControlLabel
                value="driver"
                control={<Radio />}
                label="driver licence"
              />
              <FormControlLabel
                value="Id Card"
                control={<Radio />}
                label="Id Card"
              />
            </RadioGroup>
          </FormControl>

          {id == 'passport' && (
            <div className="passport">
              <p>
                <strong>
                  {' '}
                  Take a photo of your passport. The photo should be:
                </strong>{' '}
              </p>
              <li>
                bright and clear <small>(good quality)</small>,
              </li>

              <li>
                {' '}
                uncut{' '}
                <small>
                  (all corners of the document should be visible).
                </small>
              </li>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {' '}
                <img
                  style={{ margin: '20px auto' }}
                  src={require('../../static/pass.PNG')}
                  alt=""
                />
              </div>

              <div
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div>
                  {' '}
                  <div className="inputWrapper">
                    {' '}
                    <input
                      className="fileInput"
                      type="file"
                      onChange={onSelectFile}
                      name="file1"
                    />
                  </div>
                  {selectedFile && <img src={preview} width="300" />}
                </div>
              </div>
              <Button
                variant="contained"
                disabled={canshow}
                color="primary"
                onClick={() => {
                  hn();
                }}
              >
                next
              </Button>
            </div>
          )}
          {(id == 'driver' || id == 'driverf' || id == 'driverb') && (
            <div className="driver">
              <p>
                <strong>
                  {' '}
                  Take a photo of both front and back of your licence.
                  The photo should be:
                </strong>{' '}
              </p>
              <li>
                bright and clear <small>(good quality)</small>,
              </li>

              <li>
                {' '}
                uncut{' '}
                <small>
                  (all corners of the document should be visible).
                </small>
              </li>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {' '}
                <img
                  style={{ margin: '20px auto' }}
                  src={require('../../static/fnb.PNG')}
                  alt=""
                />
              </div>

              <div
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div>
                  {' '}
                  <div className="inputWrapper">
                    {' '}
                    <input
                      className="fileInput"
                      type="file"
                      onChange={onSelectFile}
                      name="file1"
                      onClick={() => {
                        setid('driverf');
                      }}
                    />
                  </div>
                  <strong
                    style={{
                      textAlign: 'center',
                      margin: '10p auto',
                    }}
                  >
                    front
                  </strong>
                  {selectedFile && <img src={preview2} width="300" />}
                </div>
                <div>
                  {' '}
                  <div className="inputWrapper">
                    {' '}
                    <input
                      className="fileInput"
                      type="file"
                      onChange={onSelectFile}
                      onClick={() => {
                        setid('driverb');
                      }}
                      name="file1"
                    />
                  </div>
                  <strong
                    style={{
                      textAlign: 'center',
                      margin: '10p auto',
                    }}
                  >
                    back
                  </strong>
                  {selectedFile && <img src={preview3} width="300" />}
                </div>
              </div>
              <Button
                variant="contained"
                disabled={canshow}
                color="primary"
                onClick={() => {
                  hn();
                }}
              >
                next
              </Button>
            </div>
          )}
          {(id == 'Id Card' ||
            id == 'Id Cardf' ||
            id == 'Id Cardb') && (
            <div className="id card">
              <p>
                <strong>
                  {' '}
                  Take a photo of both front and back of your id card.
                  The photo should be:
                </strong>{' '}
              </p>
              <li>
                bright and clear <small>(good quality)</small>,
              </li>

              <li>
                {' '}
                uncut{' '}
                <small>
                  (all corners of the document should be visible).
                </small>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {' '}
                  <img
                    style={{ margin: '20px auto' }}
                    src={require('../../static/fnb.PNG')}
                    alt=""
                  />
                </div>
              </li>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div>
                  {' '}
                  <div className="inputWrapper">
                    {' '}
                    <input
                      className="fileInput"
                      type="file"
                      onChange={onSelectFile}
                      name="file1"
                      onClick={() => {
                        setid('Id Cardf');
                      }}
                    />
                  </div>
                  <strong
                    style={{
                      textAlign: 'center',
                      margin: '10p auto',
                    }}
                  >
                    front
                  </strong>
                  {selectedFile && <img src={preview4} width="300" />}
                </div>
                <div>
                  {' '}
                  <div className="inputWrapper">
                    {' '}
                    <input
                      className="fileInput"
                      type="file"
                      onChange={onSelectFile}
                      name="file1"
                      onClick={() => {
                        setid('Id Cardb');
                      }}
                    />
                  </div>
                  <strong style={{ textAlign: 'center' }}>
                    back
                  </strong>
                  {selectedFile && <img src={preview5} width="300" />}
                </div>
              </div>
              <Button
                variant="contained"
                disabled={canshow}
                color="primary"
                onClick={() => {
                  hn();
                }}
              >
                next
              </Button>
            </div>
          )}
        </div>
      );
    case 1:
      return (
        <Paper style={{ margin: '0 10%' }}>
          <p>
            <strong>
              {' '}
              Take a photo of yourself with a full view of the
              document you uploaded. The photo should be:
            </strong>{' '}
          </p>
          <li>
            bright and clear <small>(good quality)</small>,
          </li>

          <li>
            {' '}
            uncut{' '}
            <small>
              (all corners of the document should be visible).
            </small>
          </li>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <img src={require('../../static/selfie.PNG')} alt="" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              {' '}
              <div className="inputWrapper">
                {' '}
                <input
                  className="fileInput"
                  type="file"
                  onChange={onSelectFile}
                  name="file1"
                  onClick={() => {
                    setid('self');
                  }}
                />
              </div>
              {selectedFile && <img src={preview6} width="300" />}
            </div>
            
          </div>
          <div style={{display:'flex'}}>  <Button
                variant="contained"
                disabled={canshow}
                color="primary"
                onClick={() => {
                  setcanshow(true)
                  hn();
                }}
              >
                next
              </Button>
              <Button
                variant="contained"
                
                color="primary"
                onClick={() => {  setcanshow(false)
                  hb();
                }}
              >
               back
              </Button></div>
        </Paper>
      );
    case 2:
      return (
        <Paper style={{ margin: '0 10%' }}>
          {' '}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ textAlign: 'center' }}>
              PROOF OF RESIDENCE
            </h2>
            <div
              style={{
                display: 'flex',
                minHeight: '400px',
                justifyContent: 'center',
              }}
            >
              <div className="blue">
                <h4>WE ACCEPT</h4>
                <ul>
                  <li>Bank statements </li>
                  <li>
                    Utility bills (The documents that you provide
                    shouldn’t be older than 3 months){' '}
                  </li>
                  <li>Internet/cable TV/house phone line bills </li>
                  <li>Tax returns </li>
                  <li>Council tax bills </li>
                  <li>
                    Government-issued certifications of residence,
                    etc.
                  </li>
                </ul>
              </div>
              <div className="red">
                <h4> WE DONT ACCEPT</h4>
                <ul>
                  <li>Screenshots</li>
                  <li>Mobile phone bills</li>
                  <li>Medical bills</li>
                  <li>Receipts for purchases</li>
                  <li>Insurance statements</li>
                </ul>
              </div>
            </div>
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="inputWrapper">
                {' '}
                <input
                  className="fileInput"
                  type="file"
                  onChange={onSelectFile}
                  onClick={() => {
                    setid('doc');
                  }}
                  name="file1"
                />
              </div>
            </div>
            {selectedFile && <img src={preview7} width="300" />}
          </div>
          <div style={{display:'flex'}}>  <Button
                variant="contained"
                disabled={canshow}
                color="primary"
                onClick={() => {
                  setcanshow(true)
                    hn();
                
                }}
              >
                next
              </Button>
              <Button
                variant="contained"
                
                color="primary"
                onClick={() => {
                  setcanshow(false);
                    hb();
                
                }}
              >
               back
              </Button></div>
        </Paper>
      );
    default:
      return <Fin />;
  }
}
export const kyc = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleback = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <header className="header yy" style={{ marginBottom: '100px' }}>
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
              src={require('../../static/home-bg.png')}
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
              Contact Us
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
                <a href="/enigma" style={{ color: 'black' }}>
                  Enigma Data center
                </a>
              </li>
              <li>
                <a href="/radiant-tech" style={{ color: 'black' }}>
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
      <Paper stye={{ margin: '200px auto', maxWidth: '70%' }}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep, handleNext, handleback)}
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="footer__logo">
                <a href="index.html" className="a">
                  <img
                    src={require('../../static/home-bg.png')}
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
                  <a href="" className="a">
                    Instant connection
                  </a>
                </li>
                <li>
                  <a href="" className="a">
                    Instant conclusion
                  </a>
                </li>
                <li>
                  <a href="" className="a">
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
                  <a href="/contact" className="a">
                    Member area
                  </a>
                </li>

                <li>
                  <a href="/contact" className="a">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="footer__title">Contact</h6>
              <ul className="footer__list ul">
                <li>
                  <a href="tel:+18002345678">
                    contact@binancecryptomining.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="footer__copyright">
                <ul className="ul">
                  <li>
                    <a href="#" className="a">
                      About Binance Cryptomining
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
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  order: state.orderState,
});

const condition = authUser => !!authUser;

export default compose(
  connect(mapStateToProps),

  // withAuthorization(condition),
  withFirebase,
)(kyc);
