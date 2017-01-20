import React from 'react';
import { Link } from 'react-router'
require("./signup.less")
import { connect, getState } from 'react-redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import {createAccount, watchUserChange} from '../../redux/actions'

import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  zoomIn: {
    animationName: zoomIn,
    animationDuration: '1s'
  }
})

class Signup extends React.Component {

  constructor(props) {
        super(props);

        this.state = { index: 1 };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div>
              <div className={css(styles.zoomIn)} >hey</div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
  // TODO: update with notifcation that the signup worked
  // TODO: clean up this
  return {
    number: state.sampleOne.num,
    name: state.sampleTwo.name,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (state) => {
      dispatch(createAccount(state.email, state.passwordOne))
    },
    watchUserChange: () =>{
      dispatch(watchUserChange())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default App
