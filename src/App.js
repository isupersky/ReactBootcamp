import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table'
import InputForm from './Components/InputForm';


class App extends Component {
  state = {
    fruits : []
    // {name :"Apple"}
  };

  handleSubmit =(fruit)=>{

    console.log("handleSubmitcalled",fruit);
    
    this.setState({fruits : [...this.state.fruits,fruit]})
  }

  handleDelete =(index)=>{
    console.log("handle Delete called");
    console.log("key",index);
    
    this.setState({fruits :
      this.state.fruits.filter((fruit, i)=>{
      return i !== index;

    }) 
  } 
  );

    
  }
  render() { 

    console.log(this.state.fruits);
    
    return (

      <div className="App">
        <br/>
        <InputForm handleSubmit ={this.handleSubmit}/>
        <br/>
        <Table value = {this.state.fruits} deleteMethod = {this.handleDelete}/>
      </div>
    );
  }
}
 
export default App;