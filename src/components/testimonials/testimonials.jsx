import React from 'react';
import Nav from '../nav/nav.jsx';
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
import ExampleUnit from '../exampleUnit/exampleUnit.jsx'



const examples = [
  {
    title: "Kevin Tague",
    content: "In his time at DIRECTV’s Digital Innovation Lab (DLab), Conor quickly grew into an indispensable member of the prototype development team. He is a solid developer, a quick learner, and a creative problem solver. The enthusiasm and ingenuity he brings to his work were reflected in the cross-platform entertainment solutions he helped develop for web, mobile, and TV.",
    url: "https://www.linkedin.com/in/kevin-tague-1a31092/",
    linkTitle: "Linkedin",
  },
  {
    title: "James Felz",
    content: "I was having some problems with a fairly complex website. Conor was able to identify the issue and create a solution very quickly. He's a great developer, and is highly skilled on both the front and back end, as well as on mobile.",
    url: "https://www.linkedin.com/in/jamesfelz/",
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
                <HeaderText title="{Testimonials}" style="headerText testimonialsOverride"/>
              </Col>
          </Row>
        {this.generatedExampleUnits()}
      </Grid>
    );
  }
}

export default Testimonials
