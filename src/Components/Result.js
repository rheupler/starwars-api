import React, { Component } from 'react';

class Result extends Component {

  render() {
    return (
  	  this.props.items.map((person, index) => (
        <ul key={index}>
    	    <li>{person.name} || {person.mass}</li>
          <button onClick={() => this.props.removeItem(index)}>Remove this</button>
        </ul>
  	  ))
  	)
  }

}

export default Result;
