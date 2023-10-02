import React from "react";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

const ErrorPage = () => {
  return (
    <Container maxWidth="md">
      <Typography component="div" style={{ backgroundColor: '#A94951', paddingTop: 10, height: '80vh' }}>
        <Alert severity="error">
          <AlertTitle>Oh, no! We ran into an issue.</AlertTitle>
  This is embarassing.<strong>We can't find what you were looking for.</strong>
        </Alert>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Button variant="contained" color="primary" href="/">
            Back
         </Button>
        </div>
      </Typography>
    </Container>
  );
};

export default ErrorPage;
