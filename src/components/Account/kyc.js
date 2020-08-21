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
    marginTop: '10px',
    marginBottom: '10px',
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

function Fin({ files, firebase }) {
  const classes = useStyles();
  const [showload, setshow] = React.useState(true);
  const onUploadSubmission = e => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];
    files.forEach(file => {
      const uploadTask = firebase
        .storage()
        .ref()
        .child(`documents/${file.name}`)
        .put(file);
      promises.push(uploadTask);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === firebase.storage.TaskState.RUNNING) {
            console.log(`Progress: ${progress}%`);
          }
        },
        error => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          // do something with the url
        },
      );
    });
    Promise.all(promises)
      .then(() => alert('All files uploaded'))
      .catch(err => console.log(err.code));
  };
  React.useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 5000);
    // free memory when ever this component is unmounted
  }, []);

  return (
    <div>
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

function getStepContent(stepIndex, hn, hb, firebase) {
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
      setFiles(prevState => [...prevState, selectedFile]);
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

  switch (stepIndex,firebase) {
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
          <div style={{ display: 'flex' }}>
            {' '}
            <Button
              variant="contained"
              disabled={canshow}
              color="primary"
              onClick={() => {
                setcanshow(true);
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
            </Button>
          </div>
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
          <div style={{ display: 'flex' }}>
            {' '}
            <Button
              variant="contained"
              disabled={canshow}
              color="primary"
              onClick={() => {
                setcanshow(true);
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
            </Button>
          </div>
        </Paper>
      );
    default:
      return <Fin files={files} firebase={firebase} />;
  }
}
export const kyc = ({ firebase }) => {
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
      <Paper stye={{ margin: '10px auto', maxWidth: '70%' }}>
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
                {getStepContent(
                  activeStep,
                  handleNext,
                  handleback,
                  firebase,
                )}
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
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
