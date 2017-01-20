import React from 'react';
require("./index.less")
import { Button, Grid, Row, Col  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import { connect, getState } from 'react-redux'
import { sampleOne, sampleTwo, watchUserChange, login, signout, getTest, postTest} from '../../redux/actions'
import Navbarcomp from '../navbar/navbar.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { zoomIn, slideInRight, slideInDown, fadeInDownBig } from 'react-animations';
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
    'line-height': '1.5'
  },
  subHeader: {
    animationName: slideInRight,
    animationDuration: '2.5s',
    'text-align': 'center',
    'font-size': '2rem',
    'text-transform': 'uppercase',
    color: '#777',
    'letter-spacing': '.1em',
    'font-weight': '300',
    'line-height': '1.5',
    'font-family': '-apple-system, BlinkMacSystemFont, Lato, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    'margin-top': '7px'

  }
})

var AnimatedButton = React.createClass({

  componentWillMount(){
    console.log(this.props)
    this.setState({loading: true})
  },
  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({loading: false});
    }, self.props.timeout);
  },
  render: function() {

    if (this.state.loading) {
        return (
          <div />
        )
    } else {
      if(this.props.link){
        return (
            <ReactCSSTransitionGroup transitionName={this.props.name} transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
              <div>
                <a target="_blank" href="http://conormacken.com/blog">
                    <h3 key={this.props.name} className={this.props.style}>{this.props.name}</h3>
                </a>
              </div>
            </ReactCSSTransitionGroup>
        )
      }else{
        return (
            <ReactCSSTransitionGroup transitionName={this.props.name} transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
                <h3 key={this.props.name} className={this.props.style}>{this.props.name}</h3>
            </ReactCSSTransitionGroup>
        )
      }
    }
  }

});

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
      leftBracket: "{",
      rightBracket: "}",
      subTitle: "Full Stack JS Developer",
      contactLinkText: "",
      items:[]
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
                <h3 className={css(styles.mainHeader)} >{this.state.title}</h3>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                  <h2 className={css(styles.subHeader)}>{this.state.subTitle}</h2>
              </Col>
          </Row>
          <Row className="marginTop">
              <Col xs={4}>
                <AnimatedButton name="contact" timeout={50} style="text-center block"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton name="about" timeout={1000} style="text-center two"/>
                  <AnimatedButton name="testimonials" timeout={1500} style="text-center four"/>
              </Col>
              <Col xs={4}>
                  <AnimatedButton name="work" timeout={2000} style="text-center three"/>
                  <AnimatedButton name="blog" timeout={2500} style="text-center five" link={true}/>
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
