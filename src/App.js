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
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentWillMount() {
      fetch("https://swapi.co/api/people")
        .then(response => response.json())
        .then(responseJson => {
          this.setState({ data: responseJson.results, isLoading: false })
  	     })
        .catch(error => console.log(error))
    }

  removeItem = index => {
    const items = this.state.data;
    const newItems = items.filter((item, i) => i !== index)
    this.setState({ data: newItems })
  }

  render() {
    return (
      <div className="App">
        <Result removeItem={this.removeItem}
                items={this.state.data}
                isLoading={this.state.isLoading}
                />
      </div>
    );
  }

}

export default App;
