import React from 'react';
import { createMemoryHistory } from 'history';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Projeto from './Components/Projeto';
import renderWithRouter from './Function.test.js/renderWithRoute';


describe('Testa o componente Home.jsx', () => {

  it('Verifica se o title é renderizado', () => {
    renderWithRouter(<App/>)

    const titleHome = screen.getByText(/seja bem vindo a home/i)
 
    expect(titleHome).toBeInTheDocument();
  })
  
  it('Verifica se os links "Home", "Projetos" e "Projetos" são renderizados', () => {
    renderWithRouter(<App/>)

    const linkHome = screen.getByRole('link', {name : /home/i} )
    const linkProjects = screen.getByRole('link', {name : /Projetos/i} )
    const linkProjetos = screen.getByRole('link', {name : /Projetos/i} )

    expect(linkHome).toBeInTheDocument()
    expect(linkProjects).toBeInTheDocument()
    expect(linkProjetos).toBeInTheDocument()
  })

  it('Testa a navegação para o "Projetos"', () => {
    renderWithRouter(<App/>);

    const linkProjects = screen.getByRole('link', {name : /Projetos/i} )

    userEvent.click(linkProjects);

    const titleProject = screen.getByText(/Confira meus Projetos/i)    
    expect(titleProject).toBeInTheDocument();
  })

  it('Verifica se ao inserir uma rota inválida renderiza o "NotFound"', () => {
    const { history } = renderWithRouter(<App/>)

    act(() => {
      history.push('/testandoOErrorNotFound404');
    })

    const image404 = screen.getByAltText(/Erro notfound 404/i)

    expect(image404).toHaveAttribute('alt', "Erro notfound 404")
    
  })
})

describe('Testa o componente "Projetos"', () => {
  it('Verifica se o título é renderizado', () => {
    renderWithRouter(<Projeto />)

    const titleProject = screen.getByText(/Confira meus projetos/i)
    expect(titleProject).toBeInTheDocument()    
  })

  it('Verifica a navegação para o "NotFound"', () => {
    renderWithRouter(<Projeto/>)

    const notfound = screen.getByRole('link', { name: /404/i, hidden:true })
    expect(notfound).toBeInTheDocument()
    
    userEvent.click(notfound);    
    
    const error404 = screen.getByTestId('error404')
    expect(error404).toBeInTheDocument();
  })
});

