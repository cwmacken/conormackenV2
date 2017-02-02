import React from 'react';
require("./headerText.less")
import { zoomIn, slideInRight, slideInLeft, fadeInDownBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  mainHeader: {
    animationName: fadeInDownBig,
    animationDuration: '1.25s',
    'text-align': 'center',
    'font-size': '9.6rem',
    color: '#333',
    'text-transform': 'uppercase',
    'letter-spacing': '.1em',
    'font-weight': '300',
    'font-family': '-apple-system, BlinkMacSystemFont, Lato, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'line-height': '1.5',
    overflow: 'hidden'
  }
})


export default class EmailCatcher extends React.Component {
  // TODO: maybe add in fade in here for conatact 
  render() {
    return (
      <div>
        <h3 className={css(styles.mainHeader)} >{this.props.title}</h3>
      </div>
    );
  }
}
