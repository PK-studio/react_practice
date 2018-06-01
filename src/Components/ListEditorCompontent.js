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
  }
  ListEditorUpdater(nexItemsValue){
    this.setState({items: nexItemsValue})
  }
}

class ItemsList extends Component {
  constructor(props){
    super(props)
    this.removeItem = this.removeItem.bind(this)
  }
  render() {
    return(
      <ul>
        {this.props.items.map((oneOfitem, index) => (
          <li 
            data-number={index} 
            key={index}
          >
            <span><b>{oneOfitem.text} </b></span>
            <button onClick={this.removeItem}> remove</button>
          </li>
        ))}
      </ul>
    )
  }
  removeItem(event){
    let domEl = event.target.parentElement
    let indexOfdomEl = domEl.getAttribute("data-number")
    domEl.remove()
    let newITemList = this.props.items.splice(indexOfdomEl, 1)
    console.log(this.props.items)
    console.log(newITemList)
    this.props.updater(this.props.items)
  }
}

export default ListEditorCompontent;
