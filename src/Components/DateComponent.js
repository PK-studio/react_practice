import React, { Component } from 'react';

class DateComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      time: new Date().toLocaleTimeString()
    };
  };

  countTime() {
    this.setState((prevState) => {
      return prevState.time = new Date().toLocaleTimeString();
    });
  };

  componentDidMount() {
    setInterval(() => {this.countTime()}, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalForTime);
  };

  render() {
    return (
      <div className="DateComponent">
        <h4 className="component-description">{this.props.description}</h4>
        <p>Current time {this.state.time}</p>
      </div>
    );
  }
}

export default DateComponent;
