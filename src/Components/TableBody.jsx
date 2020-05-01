import React, { Component } from 'react';

class TableBody extends Component {
    state = {  }
    render() { 
        return ( 
            <tbody>
            <tr>
                <td>{this.props.value[0].name}</td>
                <td>abc</td>
                <td><button>Delete</button></td>
            </tr>
            </tbody>
         );
    }
}
 
export default TableBody;