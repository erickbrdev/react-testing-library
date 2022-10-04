import React, { Component } from "react"; 
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render(){
    return(
      <div>
        <img src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg" alt="Erro notfound 404" />   
        <Link to='/'>Home</Link>
      </div>
    )
  }
}