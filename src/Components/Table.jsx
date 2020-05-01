import React, { Component } from 'react';
import Tablehead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
    state = {  }
    render() { 
        return ( 
            <table className="table table-secondary m-2 ">
                <Tablehead/>
                <TableBody value={this.props.value} deleteMethod ={this.props.deleteMethod}/>
            </table>
         );
    }
}
 
export default Table;