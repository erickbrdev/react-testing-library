import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Menu extends Component {
  render() {
    return(
      <nav className="menu">
        <Link to='/'>Home</Link>
        <Link to='/projetos'>Projetos</Link>       
      </nav>
    )
  }

}