import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table'
import InputForm from './Components/InputForm';


class App extends Component {
  state = {
    fruits : [{name :"Apple", quantity: 10} ]
    // {name :"Apple"}
  };

  handleSubmit =(fruit)=>{

    console.log(fruit);
    
    this.setState({fruits : [...this.state.fruits,fruit]})
  }
  render() { 

    return (

      <div className="App">
        <br/>
        <InputForm handleSubmit ={this.handleSubmit}/>
        <br/>
        <Table value = {this.state.fruits}/>
      </div>
    );
  }
}
 
export default App;