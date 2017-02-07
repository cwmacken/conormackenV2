import React from 'react';
import Nav from '../nav/nav.jsx';
import { Button, Grid, Row, Col, Panel  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
require("./work.less")

const title = (
  <h3>Example Work</h3>
);

class Work extends React.Component {

  //  TODO: https://react-bootstrap.github.io/components.html#panels
  // TODO: https://react-bootstrap.github.io/components.html#panels-accordion
  render() {
    return (
      <Grid>
        <Nav ignore="work"/>
        <Row>
            <Col className="mainHeaderPadding" xs={12} >
              <HeaderText title="{Work}"/>
            </Col>
        </Row>


        <Row>
          <Col xsOffset={1} xs={10}>
            <Panel header={title}>
              <p className="panelText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="panelText"><a target="_blank" href="http://conormacken.com">Link to Work</a></p>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Panel header={title}>
              <p className="panelText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="panelText"><a target="_blank" href="http://conormacken.com">Link to Work</a></p>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Panel header={title}>
              <p className="panelText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="panelText"><a target="_blank" href="http://conormacken.com">Link to Work</a></p>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Panel header={title}>
              <p className="panelText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="panelText"><a target="_blank" href="http://conormacken.com">Link to Work</a></p>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Panel header={title}>
              <p className="panelText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="panelText"><a target="_blank" href="http://conormacken.com">Link to Work</a></p>
            </Panel>
          </Col>
        </Row>


      </Grid>
    );
  }
}

export default Work
