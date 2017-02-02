import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Tabs, Tab  } from 'react-bootstrap';
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require("./nav.less")

export default class Navbarcomp extends React.Component {

  render() {


    return (
      <Row>
          <Col xs={2}>
            <Link to='/'>
              <h3 className="navBtn" >Home</h3>
            </Link>
          </Col>
          <Col xs={2}>
            <Link to='/contact'>
              <h3 className="navBtn" >Contact</h3>
            </Link>
          </Col>
          <Col xs={2}>
            <Link to='/about'>
              <h3 className="navBtn" >About</h3>
            </Link>
          </Col>
          <Col xs={3}>
            <Link to='/testimonials'>
              <h3 className="navBtn" >Testimonials</h3>
            </Link>
          </Col>
          <Col xs={2}>
            <Link to='/work'>
              <h3 className="navBtn" >Work</h3>
            </Link>
          </Col>
          <Col xs={2}>
            <a target="_blank" href='http://conormacken.com/blog/'>
              <h3 className="navBtn" >Blog</h3>
            </a>
          </Col>
      </Row>
    );
  }
}
