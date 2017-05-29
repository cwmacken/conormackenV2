import React from 'react';
require("./index.less")
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { slideInRight, fadeInDownBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import EmailCatcher from '../emailCatcher/emailCatcher.jsx'
import AnimatedButton from '../animatedButton/animatedButton.jsx'
import HeaderText from '../headerText/headerText.jsx'
import SubHeaderText from '../subText/subText.jsx'

const styles = StyleSheet.create({
  mainHeader: {
    animationName: fadeInDownBig,
    animationDuration: '1.25s',
    'text-align': 'center',
    'font-size': '9.6rem',
    color: '#333',
    'text-transform': 'uppercase',
    'letter-spacing': '.1em',
    'font-weight': '300',
    'font-family': '-apple-system, BlinkMacSystemFont, Lato, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'line-height': '1.5',
    overflow: 'hidden'
  }
})

class Index extends React.Component {

  constructor(props) {
    super(props);

    // TODO: change this to props
    this.state = {
      subTitle: "Full Stack JS Developer",
    };
  }

  render() {
    return (
      <Grid>
          <Row>
              <Col className="mainHeaderPadding" xs={12} >
                <HeaderText title="{Conor Macken}" style="headerText" />
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <SubHeaderText trans="contact" timeout={1000} title="Full Stack JS + Shopify Developer"/>
              </Col>
          </Row>
          <Row className="marginTop">
              <Col xs={12} sm={4} >
                <AnimatedButton trans="home" name="contact" timeout={50} style="text-center btnOne" url="/contact"/>
              </Col>
              <Col xs={12} sm={4} >
                  <AnimatedButton trans="home" name="about" timeout={1000} style="text-center btnTwo" url="/about"/>
                  <AnimatedButton trans="home" name="testimonials" timeout={1500} style="text-center btnFour" url="/testimonials"/>
              </Col>
              <Col xs={12} sm={4} >
                  <AnimatedButton trans="home" name="work" timeout={2000} style="text-center btnThree" url="/work"/>
                  <AnimatedButton trans="home" name="blog" timeout={2500} style="text-center btnFive" link={true} url="https://conormacken.com/blog/" target=""/>
              </Col>
          </Row>
          <EmailCatcher />
      </Grid>
    );
  }
}

export default Index
