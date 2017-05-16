import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
require("./animatedButton.less")
import { Link } from 'react-router'

class AnimatedButton extends React.Component {

  componentWillMount(){
    this.setState({loading: true})
  }

  componentDidMount() {
    var self = this;
    setTimeout(() => {
      self.setState({loading: false});
    }, self.props.timeout);
  }

  render() {
    if (this.state.loading) {
        return (
          <div />
        )
    } else {
      if(this.props.link){
        return (
            <ReactCSSTransitionGroup transitionName={this.props.trans} transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
              <div>
                <a href={this.props.url}>
                    <h3 key={this.props.name} className={this.props.style}>{this.props.name}</h3>
                </a>
              </div>
            </ReactCSSTransitionGroup>
        )
      }else{
        return (
            <Link to={this.props.url}>
              <ReactCSSTransitionGroup transitionName={this.props.trans} transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>

                    <h3 key={this.props.name} className={this.props.style}>{this.props.name}</h3>

              </ReactCSSTransitionGroup>
            </Link>
        )
      }
    }
  }
}

export default AnimatedButton
