import React from 'react';
import Nav from '../nav/nav.jsx';
import { Button, Grid, Row, Col  } from 'react-bootstrap';

class Testimonials extends React.Component {

  render() {
    return (
      <Grid>
        <Nav ignore="testimonials"/>
        Testimonials
      </Grid>
    );
  }
}

export default Testimonials
