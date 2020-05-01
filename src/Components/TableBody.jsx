import React, { Component } from 'react';

class TableBody extends Component {
    state = {  }

    
    render() { 
        return ( 
            <tbody>
                {this.props.value.map((fruit,key)=>{
                    return (

            <tr key={key}>
                <td>{fruit.name}</td>
                <td>{fruit.quantity}</td>
                <td>
                    <button onClick={()=>this.props.deleteMethod(key)}>Delete</button>
                </td>
            </tr>
                    );
                })}
            
            </tbody>
         );
    }
}
 
export default TableBody;