import React, { Component } from "react"; 
import { Link } from "react-router-dom";

export default class Home extends Component {
  render(){
    return(
      <div>
        <h1>Seja bem vindo a Home</h1>    
        <Link to='/notfound'>404</Link>    
      </div>
    )
  }
}