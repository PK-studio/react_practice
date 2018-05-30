import React, { Component } from 'react';

class ListEditorCompontent extends Component {

  constructor(props) {
    super(props)
    this.state = {
        items: [],
        text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addHandler = this.addHandler.bind(this);
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
              onChange = {this.handleChange}
              value = {this.state.text}
            />
            <button onClick={this.addHandler} > add </button>
          </form>
          {/* <ItemsList/> */}
        </div>
      </div>
    );
  }

  handleChange(event){
    this.setState({text: event.target.value})
  }

  addHandler(event){
    event.preventDefault();
    if (!this.state.text.length) {
      return
    }
    const myItem = {
      text: this.state.text
    } 
    this.setState(prevState => ({
      items: prevState.items.concat(myItem),
      text: ""
    }))

    // this.setState is asynchronous = value doesn't match
    // this.setState({ 'updated': 'state'}, () => {
    //   console.log(this.state.updated);
    // });
  }
}
// class ItemsList extends Component {
//   render(){

//   }
// }

export default ListEditorCompontent;
