import React from 'react';

import { withFirebase } from '../Firebase';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';
const SignOutButton = ({ firebase }) => (
  <IconButton type="button" onClick={firebase.doSignOut}>
    <PowerSettingsNewSharpIcon
    
    style={{ color: 'red' }}
    />
  </IconButton>
);

export default withFirebase(SignOutButton);
