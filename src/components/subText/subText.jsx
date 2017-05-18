import React from 'react';
import { fadeInRightBig, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
require("./subText.less")
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '3.5s'
  },
})


export default class SubText extends React.Component {
  // TODO: maybe add in fade in here
  render() {
    return (
          <div className={css(styles.fadeIn)}>
          <h2 className="subText">
            {this.props.title}
          </h2>
          </div>

    );
  }
}
