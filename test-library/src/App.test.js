import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testando o componente de email',() => {  
  it('Verifica se existe o input do tipo "email"', () => {

    render(<App />)

    const inputEmail = screen.getByLabelText('Email:')

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  })
})
describe('Verifica se existe o componente button e sua quantidade', () => {
  it('Verifica a quantidade de botoes', () => {
    
    render(<App />)

    const inputBtn = screen.getAllByRole('button')
    
    expect(inputBtn).toHaveLength(2)
   
  })
});
  
describe('Verifica se há um botão com valor "Enviar"', () => {
  it('Verifica o botão com valor "Enviar"', () => {
    
    render(<App />)

    const btnSend = screen.getByTestId('id-send')

    expect(btnSend).toBeInTheDocument()
    expect(btnSend).toHaveValue('Enviar')
    expect(btnSend).toHaveProperty('type', 'button')
  })  
})

describe('Verifica a interação com os elementos', () => {

  it('Verifica se ao inserir o email e clicar no botão "Enviar", o email é renderizado na tela.', () => {
    
    render(<App />)

    const inputEmail = screen.getByLabelText('Email:')
    const btn = screen.getByTestId('id-send')
    const userEmail = screen.getByTestId("saved-email")

    userEvent.type(inputEmail, 'test@email.com');
    userEvent.click(btn)

    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent('Valor: test@email.com');
  });

  it('Verifica se ao clicar no botão de "cancelar" meus componentes recebem ""', () => {
    render(<App />)

    const inputEmail = screen.getByLabelText('Email:')
    const btn = screen.getByTestId('id-back')
    const userEmail = screen.getByTestId("saved-email")    

    userEvent.click(btn)

    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent('Valor:');
  })
});


