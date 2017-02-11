import React from 'react';
import { Link } from 'react-router'
require("./contact.less")
import { connect, getState } from 'react-redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import AnimatedButton from '../animatedButton/animatedButton.jsx'
import ContactForm from '../contactForm/contactForm.jsx'
import HeaderText from '../headerText/headerText.jsx'
import SubHeaderText from '../subText/subText.jsx'
import Nav from '../nav/nav.jsx'

class Contact extends React.Component {

  constructor(props) {
        super(props);
  }

  render() {
    return (

      <Grid>
          <Nav ignore="contact"/>
          <Row>
              <Col className="mainHeaderPadding" xs={12} >
                <HeaderText title="{Contact}" style="headerText"/>
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
              <Col xs={12} sm={4} >
                <AnimatedButton trans="contact" name="linkedin" timeout={50} style="text-center btnTwo" link={true} target="_blank" url="https://www.linkedin.com/in/cmackendev"/>
              </Col>
              <Col xs={12} sm={4} >
                  <AnimatedButton trans="contact" name="github" timeout={1000} style="text-center btnTwo" link={true} target="_blank" url="https://github.com/cwmacken"/>
              </Col>
              <Col xs={12} sm={4} >
                  <AnimatedButton trans="contact" name="twitter" timeout={1500} style="text-center btnTwo" link={true} target="_blank" url="https://twitter.com/ConorMacken"/>
              </Col>

          </Row>
          <Row>
            <Col  xs={12} smOffset={2} sm={8}>
              <ContactForm trans="contact" name="contact form" timeout={2000}/>
            </Col>

          </Row>
      </Grid>
    );
  }
}

const App = connect()(Contact)

export default App
