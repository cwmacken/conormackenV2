import React from 'react';
require("./headerText.less")
import { zoomIn, slideInRight, slideInLeft, fadeInDownBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  mainHeader: {
    animationName: fadeInDownBig,
    animationDuration: '1.25s'
  }
})


export default class EmailCatcher extends React.Component {
  // TODO: maybe add in fade in here for conatact
  render() {
    return (
      <div className={css(styles.mainHeader)}>
        <h3  className={this.props.style} >{this.props.title}</h3>
      </div>
    );
  }
}
