import React from 'react';
import Nav from '../nav/nav.jsx';
import { Button, Grid, Row, Col, Panel  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
import ExampleUnit from '../exampleUnit/exampleUnit.jsx'

// TODO: change gitTitle and gitTitle to second title etc etc
// TODO: maybe add alarmpi 

const examples = [
  {
    title: "DLAB",
    content: "My home from 2014 till 2017. In short DLAB was Directv's R&D unit. I worked in internal prototype development where I did all kinds of weird and interesting things, from hacking a setup box to have a Instagram screen saver to influencing critical roadmap decisions 5-7 years out with state of the art UX findings. DLAB had its hands in everything, notably heavily influencing Directv NOW.",
    url: "https://vimeo.com/58158671",
    linkTitle: "DLAB in 60 Seconds",
    gitTitle: "Dlab on Instagram",
    gitUrl: "https://www.instagram.com/explore/locations/70680609/dlab-directv/"
  },
  {
    title: "Stokecast",
    content: "Stokecast is surf forecasting site designed to give users the relevant data on current conditions, it's designed to be simple and straightforward. Stokecast is my personal ongoing project that I use to test new frameworks and try new things. I’m particularly proud of the cron job associated with pulling the daily tide graph.",
    url: "http://stokecast.com/",
    linkTitle: "Stokecast",
    gitUrl: "https://github.com/cwmacken/stokecast3",
    gitTitle: "Github Repo"
  },
  {
    title: "CorSurf",
    content: "Corsurf needed to have their site redone in a tight deadline. We started the work in late September and had the redone site up running and tested by November 1st ; just in time for their Christmas rush. The redone site lead to increased sales and brand awareness which will help Corsurf well into the future.",
    url: "https://www.corsurf.com/",
    linkTitle: "corsurf.com",
  },
  {
    title: "Conormacken.com",
    content: "This site! Nothing crazy from a data standpoint but I feel the animations are pretty interesting. Also the contact form component and associated back end routes are something to look at as well.",
    gitUrl: "https://github.com/cwmacken/conormackenV2",
    gitTitle: "Github Repo"
  },
  {
    title: "The Fin Store",
    content: "The Fin Store is a Shopify based e-commerce site. Set up from scratch by your’s truly as a move into running business’s and not just building web apps. An ongoing project that I hope to grow in the next few years.",
    url: "https://thefinstore.com/",
    linkTitle: "The Fin Store",
  },
  {
    title: "Carne Asada Boilerplate",
    content: "A boilerplate I set up with all the new fancy JS tools but setup for simple implementation and deployment. Designed to allow me to implement site quickly and efficiently with minimal set up and maximum concept validation. An ongoing project. Built with React, Redux, Node, Express, Firebase.",
    url: "https://github.com/cwmacken/carne-asada",
    linkTitle: "Github Repo",
  },

]

class Work extends React.Component {

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
        <Nav ignore="work"/>
        <Row>
            <Col className="mainHeaderPadding" xs={12} >
              <HeaderText title="{Work}"/>
            </Col>
        </Row>
        {this.generatedExampleUnits()}
      </Grid>
    );
  }
}

export default Work
