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
  },
  subHeader: {
    animationName: slideInRight,
    animationDuration: '2.5s',
    'text-align': 'center',
    'font-size': '2rem',
    'text-transform': 'uppercase',
    color: '#777',
    'letter-spacing': '.1em',
    'font-weight': '300',
    'line-height': '1.5',
    'font-family': '-apple-system, BlinkMacSystemFont, Lato, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'margin-top': '7px'

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
                <HeaderText title="{Conor Macken}" />
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                  <h2 className={css(styles.subHeader)}>{this.state.subTitle}</h2>
              </Col>
          </Row>
          <Row className="marginTop">
              <Col xs={4}>
                <AnimatedButton name="contact" timeout={50} style="text-center block" url="/contact"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton name="about" timeout={1000} style="text-center two"/>
                  <AnimatedButton name="testimonials" timeout={1500} style="text-center four"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton name="work" timeout={2000} style="text-center three"/>
                  <AnimatedButton name="blog" timeout={2500} style="text-center five" link={true}/>
              </Col>
          </Row>
          <EmailCatcher />
      </Grid>
    );
  }
}

export default Index
