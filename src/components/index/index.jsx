import React from 'react';
require("./index.less")
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { slideInRight, fadeInDownBig, zoomIn, fadeIn } from 'react-animations';
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
  },
  announceTextAnimation: {
    animationName: fadeIn,
    animationDuration: '3.5s'
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
          <Row>
            <Col className={css(styles.announceTextAnimation)} xs={12} >
              <h3 className="announceText">
                Due to the increased number/size of project requests I was receiving I have joined forces with a some extraordinarily talented individuals to form <a href="https://theavantagency.com">The Avant Agency</a>. If you want to work with me and my exceptional team please visit <a href="https://theavantagency.com">theavantagency.com</a>.
              </h3>
              <h3 className="announceText">
                I can be reached at <a href="mailto:hello@conormacken.com">hello@conormacken.com</a>
              </h3>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default Index
