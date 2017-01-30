import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
require("./contactForm.less")
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
var axios = require('axios')

class ContactForm extends React.Component {

  constructor(props) {
        super(props);

        this.handleName= this.handleName.bind(this);
        this.handleEmail= this.handleEmail.bind(this);
        this.handleMessage= this.handleMessage.bind(this);
        this.submit= this.submit.bind(this);
  }

  componentWillMount(){
    this.setState({
      loading: true,
      sent: false,
      name:'',
      email:'',
      message: '',
      error: false,
      errorMsg: ''
    })
  }

  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({loading: false});
    }, self.props.timeout);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleMessage(e) {
    this.setState({ message: e.target.value });
  }

  submit(){
    // TODO: need to have validation here
    // TODO: test for errors

    var self = this;

    axios.post('/server/contactform', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then(function (response) {
      if(response.status === 200){
        if(response.data.response === false){
          self.setState({ error: true, errorMsg: "Sorry something broke, please send a email directly to hello@conormacken.com"});
        }else{
          self.setState({sent: true});
        }
      }
    })
    .catch(function (error) {
      self.setState({ error: true, errorMsg: error});
    });
  }

  render() {
    if (this.state.loading) {
        return (
          <div />
        )
    } else if(!this.state.loading){

        if(this.state.sent){
          return(
            <h3 className="formLabel text-center">Thanks! I'll be in contact shortly!</h3>
          )
        }else{
          return (
                <ReactCSSTransitionGroup transitionName={this.props.name} transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
                      <form>
                        <FormGroup
                          controlId="formBasicText"
                        >
                          <h3 className="formLabel text-center">Please get in touch!</h3>
                          <h3 className="formLabel text-center dangerText">{this.state.errorMsg}</h3>
                          <FormControl
                            type="text"
                            placeholder="Name"
                            onChange={this.handleName}
                          />
                          <FormControl
                            type="text"
                            placeholder="Email"
                            onChange={this.handleEmail}
                          />
                          <FormControl
                            type="text"
                            componentClass="textarea"
                            placeholder="Message"
                            onChange={this.handleMessage}
                          />
                        </FormGroup>
                      </form>
                      <Button onClick={this.submit}type="submit">
                        Submit
                      </Button>
                </ReactCSSTransitionGroup>
          )
        }
    }
  }
}

export default ContactForm
