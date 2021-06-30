
import React, { Component } from 'react'
import prostars from '../prostars.json'
import '../components/table.css';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            i:5,
            data:[...prostars] 
         }
    }
    renderNew=()=>{
        this.setState({i:this.state.i+1})
    }
    sortName=()=>{
        this.state.data.sort(function(a,b){
            if(a.name < b.name)
            return -1;
            if(a.name > b.name)
            return 1;
            return 0;
        });
        this.setState({i:this.state.i})
    }
    sortPopularity=()=>{
        this.state.data.sort(function(a,b){
            return (b.popularity - a.popularity);
        });
        this.setState({i:this.state.i})
    }
    render() { 
        return ( 
            <div className='container'>
                <div>
            <span><button onClick={this.renderNew}>Get Contact</button></span>
            <span><button onClick={this.sortName}>Sort By Name</button></span>
            <span><button onClick={this.sortPopularity}>Sort By Popularity</button></span>
            </div>
            <table>
           <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        
            {this.state.data.map((item,index)=>(
                (index<this.state.i)&&
                <tr>
                <td><img src={item.pictureUrl} height='150px'></img></td>
                <td>{item.name}</td>
                <td>{item.popularity}</td>
                </tr>
            ))}
        
        </table>
            </div>
         );
    }
}
 
export default Table;