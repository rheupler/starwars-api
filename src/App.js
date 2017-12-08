import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result'

const people = fetch("https://swapi.co/api/people")
    .then(data => data.json())
    .then(data => {
       data.results
    })

class App extends Component {
  // _people() {
  //   fetch(people)
  //     .then(data => data.json())
  //     .then(data => {
  //       data.results.map(person => {
  //         return `<li>${person}</li>`
  //       })
  //     })
  // }
  render() {
    return (
      <div className="App">
        <Result />
      </div>
    );
  }
}

export default App;
