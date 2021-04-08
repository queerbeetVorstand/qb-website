import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright(): ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {'Lorenzo Wormer '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
