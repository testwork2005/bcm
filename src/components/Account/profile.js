import React from 'react';
import 'date-fns';

import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../Firebase';
function AddressForm({ firebase, auth }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [fname, setfname] = React.useState(auth.username);
  const [lname, setlname] = React.useState(auth.lastname||'');
  const [phone, setphone] = React.useState(auth.phone);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={fname}
            onChange={e => {
              setfname(e.target.value);
            }}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={lname}
            fullWidth
            onChange={e => {
              setlname(e.target.value);
            }}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="email"
            fullWidth
            disabled={true}
            value={auth.email}
            autoComplete="shipping address-line1"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="phone"
            value={phone}
            type="number"
            onChange={e => {
              setphone(e.target.value);
            }}
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
              />
            }
            label="recieve news letter"
          />
        </Grid>
        <Button
          variant="contained"
          style={{ float: 'right', backgroundColor: '#f0b90b' }}
          onClick={() => {
            firebase
              .user(auth.uid)
              .update({
                username:fname,
                lastname:lname,
                phone:phone
              })
              .then(() => {
                alert('profile updated successfully');
              })
              .catch(() => {
                alert('something went wrong! unable to update');
              });
          }}
        >
          Update profile
        </Button>
      </Grid>
    </React.Fragment>
  );
}
export default withFirebase(AddressForm);
/*<Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date of birth"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
             </MuiPickersUtilsProvider>
        </Grid>*/
