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
      name:'',
      email:'',
      message: ''
    })
  }

  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({loading: false});
    }, self.props.timeout);
  }


  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // }

  handleName(e) {
    console.log("name", e.target.value)
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    console.log("email", e.target.value)
    this.setState({ email: e.target.value });
  }

  handleMessage(e) {
    console.log("message", e.target.value)
    this.setState({ message: e.target.value });
  }

  submit(){
    // TODO: need to have validation here
    console.log("clicked ")
    console.log(this.state)

    axios.post('/server/contactform', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    if (this.state.loading) {
        console.log("loading",this.props.name)
        return (
          <div />
        )
    } else {
      console.log("done loading", this.props.name)

        return (

              <ReactCSSTransitionGroup transitionName={this.props.name} transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
                    <form>
                      <FormGroup
                        controlId="formBasicText"
                      >
                        <h3 className="formLabel text-center">Please get in touch!</h3>
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

export default ContactForm
