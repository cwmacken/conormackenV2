import React from 'react';
import Nav from '../nav/nav.jsx'
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
import SubHeaderText from '../subText/subText.jsx'
require("./about.less")

const facts = [
  'I mostly work in JS ( Node / React ), I also have a some experience with Python and Swift.',
  'Former Directv DLAB (Directv’s R&D lab) developer.',
  'All of my work at DLAB was prototype based; hacking set top boxes running old versions of Web Kit, working with distributed Raspberry Pis and toying with odd TVOS’s still in their infancy, anything that got the job done.',
  'I pride myself on being the able to figure out the hard problems.',
  'I love helping grow businesses.',
  'At DLAB I was commonly the go between for the technical team to other teams.',
  'I can explain that why your technical decision is wrong but give you workable alternatives.',
  'Data is important.',
  'Make it work, then make it pretty.',
  'At the end of the day business is about making a profitable dollar.',
  'Started as a Front End contractor , left as a Senior Lead Developer.',
  'I’d rather work with a team collaborative average devs than a team of “rockstars”.',
  'We > I.',
  'I love installing lightweight linux based OS’s on old computers.',
  'Star Wars.',
  'I’m a surf junkie and build my own surfboards.',
  'I’m mostly self taught and always willing learn.',
  'Karma.'
]

class About extends React.Component {
  // TODO: change animation

  constructor(props) {
    super(props);
    this.populate = this.populate.bind(this);
  }


  populate(){
    const populatedDom = facts.map((fact,i) => {
        return(
          <h4 key={i} className="baseText">
            {fact}
          </h4>
        )
    });

    return(populatedDom)
  }
  render() {
    return (
      <Grid>
        <Nav ignore="about"/>
        <Row>
            <Col className="mainHeaderPadding" xs={12} >
              <HeaderText title="{About}"/>
            </Col>
        </Row>
        <Row>
          <Col xsOffset={2} xs={8}>
            {this.populate()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About
