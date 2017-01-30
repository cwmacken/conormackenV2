import React from 'react';
import { Link } from 'react-router'
require("./contact.less")
import { connect, getState } from 'react-redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import AnimatedButton from '../animatedButton/animatedButton.jsx'
import ContactForm from '../contactForm/contactForm.jsx'
import HeaderText from '../headerText/headerText.jsx'
import SubHeaderText from '../subText/subText.jsx'

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
          <Row>
              <Col xs={12} >
                  <a href="mailto:hello@conormacken.com">
                    <SubHeaderText title="hello@conormacken.com"/>
                  </a>
              </Col>
          </Row>
          <Row className="marginTop">
              <Col xs={4}>
                <AnimatedButton trans="contact" name="linkedin" timeout={50} style="text-center two" link={true} target="_blank" url="https://www.linkedin.com/in/cmackendev"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton trans="contact" name="github" timeout={1000} style="text-center two" link={true} target="_blank" url="https://github.com/cwmacken"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton trans="contact" name="twitter" timeout={1500} style="text-center two" link={true} target="_blank" url="https://twitter.com/ConorMacken"/>
              </Col>

          </Row>
          <Row>
            <Col xsOffset={2} xs={8}>
              <ContactForm trans="contact" name="contact form" timeout={2000} style="text-center three"/>
            </Col>

          </Row>
      </Grid>
    );
  }
}

const App = connect()(Contact)

export default App
