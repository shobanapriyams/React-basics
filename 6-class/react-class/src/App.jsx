import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       first:0,
       second:100
    }

    this.handleClick1 = this.handleClick1.bind(this)
  }

  handleClick1() {
    this.setState({first: this.state.first+1})
  }
  componentDidMount() {
    console.log("Data received")
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.first !== this.state.first){
      console.log("First value changed")
    }
  }
  
  render() {
    return (
      <div>
        <h1>First: {this.state.first}</h1>
        <h1>First: {this.state.second}</h1>
        <button onClick={this.handleClick1}>Add First</button>
        <button onClick={() => this.setState({second: this.state.second+1})}>Add Second</button>
      </div>
    )
  }
}

export default App