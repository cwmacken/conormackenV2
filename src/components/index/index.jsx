import React from 'react';
require("./index.less")
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import { connect, getState } from 'react-redux'
import { sampleOne, sampleTwo, watchUserChange, login, signout, getTest, postTest} from '../../redux/actions'
import Navbarcomp from '../navbar/navbar.jsx'

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.name,
      email: null,
      passwordOne: null,
      passwordTwo: null,
      emailLogin: null,
      passwordLogin: null,
      title: "{CONOR MACKEN}",
      subTitle: "Full Stack JS Developer"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    this.handleChangeEmailLogin= this.handleChangeEmailLogin.bind(this);
    this.handleChangePasswordLogin = this.handleChangePasswordLogin.bind(this);
    this.login = this.login.bind(this);

    this.props.watchUserChange();

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(){
    this.props.handleSubmit(this.state)
  }

  handleChangeEmailLogin(event){
    this.setState({emailLogin: event.target.value});
  }

  handleChangePasswordLogin(event){
    this.setState({passwordLogin: event.target.value});
  }

  login(){
    this.props.login(this.state)
  }

  render() {
    return (
      <Grid>
          <Row>
              <Col className="mainHeaderPadding" xs={12} >
                  <h1 className="text-center mainHeader">{this.state.title}</h1>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                  <h2 className="text-center subHeader">{this.state.subTitle}</h2>
              </Col>
          </Row>
          <Row className="marginTop">
            <Col xs={4}>
              <h3 className="text-center block">Contact</h3>
            </Col>
            <Col xs={4}>
              <h3 className="text-center two">About</h3>
              <h3 className="text-center four">Testimonials</h3>
            </Col>
            <Col xs={4}>
              <h3 className="text-center three">Work</h3>
              <h3 className="text-center five">Blog</h3>
            </Col>
          </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.sampleOne.num,
    name: state.sampleTwo.name,
    auth: state.auth,
    endpoint: state.endpoint
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (e) => {
      dispatch(sampleOne())
    },
    handleSubmit: (state) => {
      dispatch(sampleTwo(state.value))
    },
    createAccount: (state) => {
      dispatch(attemptLogin(state.email, state.passwordOne))
    },
    login: (state) => {
      dispatch(login(state.emailLogin, state.passwordLogin))
    },
    signout: () => {
      dispatch(signout())
    },
    watchUserChange: () =>{
      dispatch(watchUserChange())
    },
    getTest: () => {
      dispatch(getTest())
    },
    postTest: () => {
      dispatch(postTest())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

export default App
