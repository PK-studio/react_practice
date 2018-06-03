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
    this.removeHandler = this.removeHandler.bind(this);
    this.ListEditorUpdater = this.ListEditorUpdater.bind(this);
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
            <button onClick={this.removeHandler} > remove all </button>
          </form>
          <ItemsList items={this.state.items} updater={this.ListEditorUpdater}/>
        </div>
      </div>
    );
  }
  handleChange(event){
    this.setState({text: event.target.value})
  }
  addHandler(event){
    event.preventDefault()
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
  }
  removeHandler(event){
    event.preventDefault()
    this.setState({items: []})
  }
  ListEditorUpdater(newItemsString){
    this.setState({items: newItemsString})
  }
}

class ItemsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
    this.removeItem = this.removeItem.bind(this)
  }
  static getDerivedStateFromProps(prevProps, prevState){
    if(prevProps.items.length === prevState.items.length){
      return prevState
    }
    return {
      items: prevProps.items
    }
  }
  render() {
    return(
      <ul>
        {this.props.items.map((oneOfitem,index) => (
          <li 
            data-number={index}
            key={oneOfitem.text+index}
          >
            <span><b>{oneOfitem.text} </b></span>
            <button onClick={this.removeItem}> remove</button>
          </li>
        ))}
      </ul>
    )
  }
  removeItem(event){
    event.preventDefault()
    let indexOfdomEl = event.target.parentElement.getAttribute("data-number")
    let newItemlist = this.state.items
    newItemlist.splice(indexOfdomEl, 1)
    this.setState({items: newItemlist})
    this.props.updater(newItemlist)
  }
}

export default ListEditorCompontent;
