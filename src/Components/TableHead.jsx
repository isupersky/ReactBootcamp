import React, { Component } from 'react';

class Tablehead extends Component {
    state = {  }
    render() { 
        return ( 
            <thead>
            <tr>
                <th>Fruit</th>
                <th>Quantity</th>
                <th>Option</th>
            </tr>
            </thead>
         );
    }
}
 
export default Tablehead;