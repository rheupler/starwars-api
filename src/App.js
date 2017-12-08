import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result'

const people = fetch("https://swapi.co/api/people")
    .then(data => data.json())
    .then(data => {
       // json data
       console.log(data)
    })

class App extends Component {

  render() {
    return (
      <div className="App">
        <Result />
      </div>
    );
  }
}

export default App;
