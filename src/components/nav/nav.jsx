import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Tabs, Tab  } from 'react-bootstrap';
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require("./nav.less")
var hamburger = require('../../assets/images/hamburger.png')

// TODO: maybe make the nav an overlay

import { fadeIn, fadeOut } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '.5s'
  },
  fadeOut: {
    animationName: fadeOut,
    animationDuration: '.5s'
  }
})

const mobileWidth = 12

const ltWidth = 2

const buttons = [
  {
    title: 'home',
    internalLink: true,
    href: '/',
    offset: 1,
  },
  {
    title: 'contact',
    internalLink: true,
    href: '/contact',
    offset: 0
  },
  {
    title: 'about',
    internalLink: true,
    href: '/about',
    offset: 0
  },
  {
    title: 'testimonials',
    internalLink: true,
    href: '/testimonials',
    offset: 0
  },
  {
    title: 'work',
    internalLink: true,
    href: '/work',
    offset: 0
  },
  {
    title: 'blog',
    internalLink: false,
    href: 'https://conormacken.com/blog/',
    offset: 0
  },
]

export default class Navbarcomp extends React.Component {

  constructor(props) {
    super(props);
    this.generatedButtons = this.generatedButtons.bind(this);
    this.mobileNavClicked = this.mobileNavClicked.bind(this);

    this.state = {
      mobileNavClass: "navBtn",
      mobileAnimation: null
    };
  }

  generatedButtons() {

    const generatedButtons = buttons.map((button,i) => {

             if(this.props.ignore === button.title){
                return false
             }

             if(!button.internalLink){
               return(
                 <Col className={this.state.mobileAnimation} xs={mobileWidth} mdOffset={button.offset} md={ltWidth} key={i}>
                   <a href={button.href}>
                     <h3 className={this.state.mobileNavClass} >{button.title}</h3>
                   </a>
                 </Col>
               )
             }else{
               return(
                 <Col className={this.state.mobileAnimation} xs={mobileWidth} mdOffset={button.offset} md={ltWidth} key={i}>
                   <Link to={button.href}>
                     <h3 className={this.state.mobileNavClass} >{button.title}</h3>
                   </Link>
                 </Col>
               )
             }
    });

    return(generatedButtons)
  }

  mobileNavClicked(){
    var self = this;
    if(this.state.mobileNavClass === 'navBtn'){
      this.setState({mobileNavClass: 'navBtn mobileClicked', mobileAnimation: css(styles.fadeIn)})
    }else{
      this.setState({mobileNavClass: 'navBtn mobileClicked', mobileAnimation: css(styles.fadeOut)})
      setTimeout(function(){ self.setState({mobileNavClass: 'navBtn', mobileAnimation: null}); }, 500);
    }

  }

  render() {

    return (
      <Row>
        <Col xsOffset={0} xs={12}>
          <h3 className="mobile" onClick={this.mobileNavClicked}><img src={hamburger}></img></h3>
        </Col>
        {this.generatedButtons()}
      </Row>
    );
  }
}
