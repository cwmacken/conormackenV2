import React from 'react';
import Nav from '../nav/nav.jsx'
import { Button, Grid, Row, Col  } from 'react-bootstrap';

class About extends React.Component {

  render() {
    return (
      <Grid>
        <Nav ignore="about"/>
        About
      </Grid>
    );
  }
}

export default About
