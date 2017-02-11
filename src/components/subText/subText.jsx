import React from 'react';
import { fadeInRightBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
require("./subText.less")

const styles = StyleSheet.create({
  subHeader: {
    animationName: fadeInRightBig,
    animationDuration: '2.5s'
  }
})

export default class SubText extends React.Component {
  // TODO: maybe add in fade in here
  render() {
    return (
      <div className={css(styles.subHeader)}>
          <h2 className="subText">
            {this.props.title}
          </h2>
      </div>
    );
  }
}
