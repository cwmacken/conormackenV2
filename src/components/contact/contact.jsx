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
                    <SubHeaderText title="hello@conormacken.com" trans="contact" timeout={3000}/>
                  </a>
              </Col>
          </Row>
          <Row className="marginTop">
              <Col xs={12} sm={3} >
                <AnimatedButton trans="contact" name="linkedin" timeout={1000} style="text-center btnTwo" link={true} target="_blank" url="https://www.linkedin.com/in/cmackendev"/>
              </Col>
              <Col xs={12} sm={3} >
                  <AnimatedButton trans="contact" name="github" timeout={1000} style="text-center btnTwo" link={true} target="_blank" url="https://github.com/cwmacken"/>
              </Col>
              <Col xs={12} sm={3} >
                  <AnimatedButton trans="contact" name="twitter" timeout={1000} style="text-center btnTwo" link={true} target="_blank" url="https://twitter.com/ConorMacken"/>
              </Col>
							<Col xs={12} sm={3} >
                  <AnimatedButton trans="contact" name="upwork" timeout={1000} style="text-center btnTwo" link={true} target="_blank" url="https://www.upwork.com/o/profiles/users/_~014674e3d57200c281/"/>
              </Col>

          </Row>
          <Row>
            <Col  xs={12} smOffset={2} sm={8}>
              <ContactForm trans="contact" name="contact form" timeout={1000}/>
            </Col>

          </Row>
      </Grid>
    );
  }
}

const App = connect()(Contact)

export default App
