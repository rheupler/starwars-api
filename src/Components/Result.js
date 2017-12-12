import React, { Component } from 'react';
import '../App.css'

class Result extends Component {

  renderList() {
    if (this.props.isLoading) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        this.props.items.map((person, index) => (
          <ul key={index} className="item-list">
      	    <li>{person.name}</li>
            <li>Birth year: {person.birth_year}</li>
            <button onClick={() => this.props.removeItem(index)}>Remove this</button>
          </ul>
    	  ))
      )
    }
  }

  render() {
    return (
      <div>
  	  { this.renderList() }
      </div>
  	)
  }

}

export default Result;
