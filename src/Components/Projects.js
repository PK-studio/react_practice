import React, { Component } from 'react';

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      time: "show time",
      data: "render date"
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
      <div className="projects">
        <p>My Projects Component</p>
        {this.props.passArguments}
        <p>Current time {this.state.time}</p>
      </div>
    );
  }
}

export default Projects;
