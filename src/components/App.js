import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const SayHello = () => <div>Hello!</div>;
const SayGoodbye = () => <div>Goodbye!</div>;

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Container fixed>
        <Box my={4}>
          <Link to="/">Hello</Link>
          <Link to="/exit">Goodbye</Link>
          <Typography variant="h4" component="h1" gutterBottom>
          <Route exact path="/" component={SayHello} />
          <Route exact path="/exit" component={SayGoodbye} />
          </Typography>
        </Box>
      </Container>
    </Router>
  ); 
  
}

