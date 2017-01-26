import React from 'react';
require("./emailCatcher.less")
import { zoomIn, slideInRight, slideInLeft, fadeInDownBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  subHeader: {
    'text-align': 'center',
    'font-size': '2rem',
    'text-transform': 'uppercase',
    color: '#777',
    'letter-spacing': '.1em',
    'font-weight': '300',
    'line-height': '1.5',
    'font-family': '-apple-system, BlinkMacSystemFont, Lato, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'margin-top': '7px',
    display: 'block'

  },
  input: {
    animationName: slideInLeft,
    animationDuration: '2.5s',
  }
})


export default class EmailCatcher extends React.Component {
  render() {
    return (
      <div>
        <div id="mc_embed_signup">
          <form action="//conormacken.us15.list-manage.com/subscribe/post?u=c55cbcb3b82621b0969d71f42&amp;id=cbd15b684b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div className={css(styles.input)}  id="mc_embed_signup_scroll">
              <label className={css(styles.subHeader)} htmlFor="mce-EMAIL">Subscribe to my mailing list</label>
              <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required></input>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                <input type="text" name="b_c55cbcb3b82621b0969d71f42_cbd15b684b" tabIndex="-1" value=""></input>
              </div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="subscribe"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
