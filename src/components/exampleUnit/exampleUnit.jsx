import React from 'react';
import { Row, Col, Panel  } from 'react-bootstrap';
require("./exampleUnit.less")
import { fadeInRightBig, fadeInLeftBig  } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  slideInRight: {
    animationName: fadeInRightBig,
    animationDuration: '2.5s'
  },
  slideInLeft: {
    animationName: fadeInLeftBig,
    animationDuration: '2.5s'
  }
})


export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
  }

  renderTitle(){
    return(<h3>{this.props.content.title}</h3>)
  }

  chooseAnimation(){
    if(this.props.index % 2 == 0){
      return (
        <Panel className={css(styles.slideInRight)}  header={this.renderTitle()}>
          <p className="panelText">{this.props.content.content}</p>
          <p className="panelText"><a target="_blank" href={this.props.content.url}>{this.props.content.linkTitle}</a></p>
        </Panel>
      );
    }else{
      return (
        <Panel className={css(styles.slideInLeft)}  header={this.renderTitle()}>
          <p className="panelText">{this.props.content.content}</p>
          <p className="panelText"><a target="_blank" href={this.props.content.url}>{this.props.content.linkTitle}</a></p>
        </Panel>
      );
    }
  }

  render() {
    const animated = this.chooseAnimation()
    return (
      animated
    );
  }
}
