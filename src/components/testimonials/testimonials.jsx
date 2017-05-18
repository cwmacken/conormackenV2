import React from 'react';
import Nav from '../nav/nav.jsx';
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
import ExampleUnit from '../exampleUnit/exampleUnit.jsx'



const examples = [
  {
    title: "Andy Gossett - Corsurf.com",
    content: "Conor was key in completely revamping our website, which had an immediate impact on our conversion rate. He has a deep understanding of the both the technical side, while still understanding the importance of the look and flow of a website.  His expertise was invaluable starting from the big picture of how to best build a successful website.",
    url: "https://www.linkedin.com/in/andy-gossett-5760066b/",
    linkTitle: "Linkedin"
  },
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
  },
  {
    title: "Caroline Griswold",
    content: "I asked Conor to build my personal website. I have close to zero technical skills, but he was patient with me in explaining basic html and why he made specific technical decisions. My site is up and running and is easy to manage while still looking very professional.",
    url: "https://thecarolinegriswold.com/",
    linkTitle: "Blog / Portfolio Site"
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
