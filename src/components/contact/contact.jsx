import React from 'react';
import { Link } from 'react-router'
require("./contact.less")
import { connect, getState } from 'react-redux'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import {createAccount, watchUserChange} from '../../redux/actions'

class Contact extends React.Component {

  constructor(props) {
        super(props);
  }

  render() {
    return (
        <div>
          Contact
        </div>
    );
  }
}

const App = connect()(Contact)

export default App
