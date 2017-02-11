import React from 'react';
import Nav from '../nav/nav.jsx';
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
import ExampleUnit from '../exampleUnit/exampleUnit.jsx'



const examples = [
  {
    title: "Person 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com/",
    linkTitle: "Linkedin",
  },
  {
    title: "Person 2",
    content: "Stokecast is surf forecasting site designed to give users the relevant data on current conditions, it's designed to be simple and straightforward. Stokecast is my personal ongoing project that I use to test new frameworks and try new things. I’m particularly proud of the cron job associated with pulling the daily tide graph.",
    url: "https://www.google.com/",
    linkTitle: "Linkedin"
  }

]

class Testimonials extends React.Component {

  generatedExampleUnits(){
    const exampleUnits = examples.map((example,i) => {
      return(
        <Row key={i} >
          <Col xsOffset={1} xs={10}>
            <ExampleUnit content={example} index={i} />
          </Col>
        </Row>
      )
    });
    return exampleUnits
  }


  render() {
    return (
      <Grid>
        <Nav ignore="testimonials"/>
          <Row>
              <Col className="mainHeaderPadding" xs={12} >
                <HeaderText title="{Testimonials}"/>
              </Col>
          </Row>
        {this.generatedExampleUnits()}
      </Grid>
    );
  }
}

export default Testimonials
