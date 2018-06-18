import React, { Component } from 'react';
import DateComponent from './DateComponent';
import ListEditorCompontent from './ListEditorCompontent';
import MarkdownCompontent from './MarkdownCompontent';

class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
    };
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  render() {
    return (
      <div className="navigation">
        <h1>List of my example components</h1>
        <DateComponent description="DateComponent - displays and refreshes date" />
        <ListEditorCompontent description="ListEditorCompontent - show and edit items list" />
        <MarkdownCompontent description="MarkdownCompontent - allows use markdown" />
      </div>
    );
  }
}

export default Navigation;
