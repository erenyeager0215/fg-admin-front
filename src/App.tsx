import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Form } from './components/Form';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Funabashi-Gohan © '}
      <Link color="inherit" href="https://mui.com/">
        ふなばしごはん
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
     <Form />
     <Copyright />
    </Container>
  );
}
