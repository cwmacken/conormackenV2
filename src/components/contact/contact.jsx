import React from 'react';
import { Link } from 'react-router'
require("./contact.less")
import { connect, getState } from 'react-redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import AnimatedButton from '../animatedButton/animatedButton.jsx'
import HeaderText from '../headerText/headerText.jsx'

class Contact extends React.Component {

  constructor(props) {
        super(props);
  }

  render() {
    return (

      <Grid>
          <Row>
              <Col className="mainHeaderPadding" xs={12} >
                <HeaderText title="{Contact}"/>
              </Col>
          </Row>
          <Row className="marginTop">
              <Col xs={4}>
                <AnimatedButton name="linkedin" timeout={50} style="text-center block" url="/contact"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton name="github" timeout={1000} style="text-center two"/>
                  <AnimatedButton name="email" timeout={1500} style="text-center four"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton name="contact form" timeout={2000} style="text-center three"/>
                  <AnimatedButton name="twitter" timeout={2500} style="text-center five" link={true}/>
              </Col>
          </Row>
      </Grid>
    );
  }
}

const App = connect()(Contact)

export default App
