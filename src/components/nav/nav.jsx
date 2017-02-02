import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Tabs, Tab  } from 'react-bootstrap';
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require("./nav.less")

var buttons = [
  {
    title: 'home',
    internalLink: true,
    width: 2,
    href: '/',
    offset: 1
  },
  {
    title: 'contact',
    internalLink: true,
    width: 2,
    href: '/contact',
    offset: 0
  },
  {
    title: 'about',
    internalLink: true,
    width: 2,
    href: '/about',
    offset: 0
  },
  {
    title: 'testimonials',
    internalLink: true,
    width: 2,
    href: '/testimonials',
    offset: 0
  },
  {
    title: 'work',
    internalLink: true,
    width: 2,
    href: '/work',
    offset: 0
  },
  {
    title: 'blog',
    internalLink: false,
    width: 2,
    href: 'http://conormacken.com/blog/',
    offset: 0
  },
]

export default class Navbarcomp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {buttonData: buttons};
    this.generatedButtons = this.generatedButtons.bind(this);
  }

  generatedButtons() {

    const generatedButtons = buttons.map((button,i) => {

             if(this.props.ignore === button.title){
                return false
             }

             if(!button.internalLink){
               return(
                 <Col xsOffset={button.offset} xs={button.width} key={i}>
                   <a target="_blank" href={button.href}>
                     <h3 className="navBtn" >{button.title}</h3>
                   </a>
                 </Col>
               )
             }else{
               return(
                 <Col xsOffset={button.offset} xs={button.width} key={i}>
                   <Link to={button.href}>
                     <h3 className="navBtn" >{button.title}</h3>
                   </Link>
                 </Col>
               )
             }
    });

    return(generatedButtons)
  }

  render() {
    return (
      <Row>
        {this.generatedButtons()}
      </Row>
    );
  }
}
