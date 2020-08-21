import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const orderitem = ({ firebase }) => {
  const [isloading, setloading] = React.useState(false);
  const [orders, setorders] = React.useState({});
  const [status, setstatus] = React.useState('');
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const Orderitems = ({ order,ident }) => {
    React.useEffect(()=>{

      console.log(ident);
    })
    const classes = useStyles();
    const handleChange = event => {
      setstatus(event.target.value);
    };
    return (
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className="ordcon"
      >
        <div>{order.email}</div>
        <div>{order.name}</div>
        <div>{order.amount}</div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            {order.status}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            onChange={handleChange}
          >
            
            <MenuItem value={'pending'}>pending</MenuItem>
            <MenuItem value={'approved'}>approved</MenuItem>
            <MenuItem value={'expired'}>cancel</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            firebase
              .orders()
              .child(ident)
              .update({ status: status })
              .then(() => {
                alert('status updated');
              })
              .catch(err => {
                alert(err);
              });
          }}
        >
          {' '}
          UPDATE
        </Button>
      </div>
    );
  };

  React.useEffect(() => {
    setloading(true);
    firebase
      .orders()
      .orderByChild('createdAt')
      .once('value')
      .then(function(snapshot) {
        if (!!snapshot.val()) {
          setorders(snapshot.val());
        }
      })
      .then(() => {
        if (!!orders) {
          setloading(false);
        }
      });
  }, []);
  return (
    <div>
      {isloading && <p>loading...</p>}

      <div>
        {Object.keys(orders).map(key => {
          return <Orderitems key={key} order={orders[key]} ident={key} />;
        })}
      </div>
    </div>
  );
};

export default withFirebase(orderitem);
