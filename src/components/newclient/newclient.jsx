import React from 'react';
import Nav from '../nav/nav.jsx'
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import HeaderText from '../headerText/headerText.jsx'
require("./newclient.less")
import { fadeIn} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2.5s'
  },
})

// Object with font weight and string
const facts = [
  {
    styles: "baseText newclientHeaderText",
    text: 'Rates:'
  },
  {
    styles: "baseText",
    text: 'Projects under 10 hours of work: $195 USD/hr'
  },
  {
    styles: "baseText",
    text: 'Projects under 40 hours of work: $145 USD/hr'
  },
  {
    styles: "baseText",
    text:'Projects over 40 hours of work: $115 USD/hr'
  },{
		styles: "baseText newclientHeaderText",
		text:'Examples:'
	},{
		styles: "baseText",
		text:'Under 10 hours: Installing and validating a Pinterest pixel.'
	},{
		styles: "baseText newClientBtmMargin",
		text:'1 hrs x $195 USD/hr = $195 USD'
	},{
		styles: "baseText",
		text:'Under 40 hours: Updating a site to be mobile responsive and full site migration.'
	},{
		styles: "baseText newClientBtmMargin",
		text:'15 hrs x $145 USD/hr = $2,175 USD'
	},{
		styles: "baseText",
		text:'Over 40 hours: Fully functional high performing quiz site'
	},
  {
		styles: "baseText newClientBtmMargin",
		text:'75 hrs x $115 USD/hr = $8,625 USD'
	},{
		styles: "baseText newclientHeaderText",
		text:'Next Steps:'
	},{
		styles: "baseText",
		text: '1hr free consultation to disucss your project.'
	},{
		styles: "baseText",
		text:"If we decide it's a good fit I'll put together a project roadmap (1-time $95 USD fee)."
	},{
		styles: "baseText",
		text: "If we work together I'll credit the $95 USD to the total cost of the project."
	},{
		styles: "baseText",
		text:"Please email Hello@conormacken.com that you'd like to schedule your consultation."
	}

]

class About extends React.Component {

  constructor(props) {
    super(props);
    this.populate = this.populate.bind(this);
  }

  populate(){
    // look at weight in object and adjust
    const populatedDom = facts.map((fact,i) => {

        return(
          <h4 key={i} className={fact.styles}>
            {fact.text}
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
              <HeaderText title="{New Client Info}" style="headerText"/>
            </Col>
        </Row>
        <Row>
          <Col className={css(styles.fadeIn)} xsOffset={0} xs={12} smOffset={2} sm={8}>
            {this.populate()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About
