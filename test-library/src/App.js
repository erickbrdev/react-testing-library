import React from 'react'
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  handleChange = (value) => {
    this.setState({
      email: value
    })
  }

  handleClick = (value) => {
    this.setState({
      email:'',
      saveEmail: value
    })
  }

  clear = (e) => {
    this.setState({
      email:'',
      saveEmail:'',
    })
  }

  render(){
    return(
      <div className='container-email'>
        <label htmlFor='input-email'>
          Email: 
          <input type= 'email' id='input-email' value={this.state.email} onChange={ (e) => {
            this.handleChange(e.target.value)
          }}></input>
        </label>
        <input 
          type='button' 
          id='send-btn' 
          value='Enviar' 
          onClick={() => this.handleClick(this.state.email)}
          data-testid='id-send'
        >          
        </input>
        <input 
          type='button' 
          id='back-btn' 
          value='Cancelar' 
          onClick={this.clear}
          data-testid='id-back'
        >
        </input>
        <div className='saved-email'>
          <h2 data-testid= "saved-email">{`Valor: ${this.state.saveEmail}`}</h2>     
        </div>
        
      </div>
    )
  }
}
  

