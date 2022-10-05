import React, { Component } from "react"; 
import { Link } from "react-router-dom";

export default class Projeto extends Component {
  render(){
    return(
      <div>
        <h1>Confira meus projetos</h1>    
        <Link 
          data-testid = 'error404'
          to='/notfound'
        >
          404
        </Link>    
      </div>
    )
  }
}