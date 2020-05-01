import React, { Component } from 'react';

class InputForm extends Component {
    state = {  }
    onFormSubmit =(event)=>{
        event.preventDefault();
        console.log("onFomeSubmit called");
        
        this.props.handleSubmit(this.state);                                                                                                                                                                                              
    }
    handleChange=(event)=>{
        
        let input= event.target.value;
        let fruit= input.split("-"); 
        console.log('handlechange', input)
        this.setState({name :fruit[0], quantity:fruit[1]});
    }
    render() { 
        return ( 
        <div>

            <input onChange={(e) => console.log(e)} type="text" name="name" id="name"/>
            <input type="submit" value="Add" />
      
        </div>
         );
    }
}
 
export default InputForm;