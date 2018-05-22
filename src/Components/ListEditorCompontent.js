import React, { Component } from 'react';

class ListEditorCompontent extends Component {

  constructor(props) {
    super(props)
    this.state = {
        items: [],
        text: "test"
    };
    this.handleChange = this.handleChange.bind(this);
  };

  render() {
    return (
      <div>
        <h4 className="component-description">{this.props.description}</h4>
        <div>
          <p>Your list</p>
          <form>
            <label>
                Add or remove item
            </label>
            <input
              onChange={this.handleChange}
            />
          <button>add</button>
          <button>remove</button>
          </form>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }

  handleChange(event){
      this.setState({text: event.target.value})
      console.log(event.target.value)
  }
}

export default ListEditorCompontent;
