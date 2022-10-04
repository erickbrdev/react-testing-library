import React from 'react';
import { Route, Switch} from "react-router-dom"
import Menu from './Components/Menu';
import Home from './Components/Home';
import Projeto from './Components/Projeto';
import NotFound from './Components/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <Menu />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/projetos' component={ Projeto } />
          <Route path='*' component={ NotFound } />
        </Switch>
      </div>
    )
  }
}

export default App;
