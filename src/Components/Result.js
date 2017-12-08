import React, { Component } from 'react';

// const Result = (list) => {
//   <div className="table">
//     listResult.map((item) => {
//       <div className="table-row">
//         <span style={{ width: '100%' }}>item.name</span>
//       </div>
//     })
//   </div>
// }

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentWillMount() {
      fetch("https://swapi.co/api/people")
        .then(response => response.json())
        .then(responseJson => {
          this.setState(prevState => Object.assign({}, prevState, {
  		  isLoading: false,
  		  data: responseJson.results
  		}), () => {
  		  console.log(this.state.data)
  		})
  	  })
        .catch(error => console.log(error))
    }

  render() {
    return (
  	  this.state.data.map(person => (
  	    <p>{person.name}</p>
  	  ))
  	)
  }

}

export default Result;
