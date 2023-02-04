import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import dados from './db.json'

import LandingPage from './Pages/LandingPage';
import PaginaProduto from 'Pages/PaginaProduto';
import PaginaCadastroUsuario from 'Pages/PaginaCadastroUsuario';
import PaginaErro404 from 'Pages/PaginaErro404';
import PaginaRecuperarSenha from 'Pages/PaginaRecuperarSenha';
import PaginaCadastroProduto from 'Pages/PaginaCadastroProduto';
import PaginaLogin from 'Pages/PaginaLogin';


function App() {
  
  const produtosIniciais = dados.produtos.map(produto => {
    produto = {id: uuidv4(), ...produto, data_criacao: new Date()}
    return produto
  })

  const [produtos, setProdutos] = useState([...produtosIniciais])
  
  const [categorias, setCategorias] = useState([...new Set(produtos.map(produto=>produto.categoria))])

  const [usuarios, setUsuarios] = useState([
    {
      id: uuidv4(),
      nome: "Samuel",
      email: "samuel.carvalho.dev@gmail.com",
      senha: "123456",
      tipo: "lojista",
      data_nascimento: new Date('15/05/1997'),
      data_cadastro: new Date()
    }
  ])

  const [login, setLogin] = useState({
    logado:false, 
    usuario: {}
  })
  
  function salvaProduto(produto){
    produto = {id: uuidv4(), ...produto, data_criacao: new Date()}
    setProdutos([...produtos, produto])
  }

  function salvaUsuario(usuario){
    let emailUtilizado = usuarios.filter(usuarioCadastrado => usuarioCadastrado.email === usuario.email)
    if(emailUtilizado.length === 0){
      usuario = {id: uuidv4(), ...usuario, data_cadastro: new Date()}
      setUsuarios([...usuarios, usuario])
      alert("cadastrado com sucesso!")
    } else {
      alert("Email já utilizado!")
    }
  }
  
  function logar(loginUsuario){
    let match = usuarios.filter(usuario => usuario.email === loginUsuario.email)
    let resposta = ""
    if(match.length === 1){
      if(match[0].senha === loginUsuario.senha){
        setLogin({logado: true, usuario: match[0]})
        if(login.logado) {resposta = "Logado!"}
      } else {
        resposta = "Senha incorreta!"
      }
    } else {
      resposta = "Email não encontrado!"
    }
    return resposta
  }

  function validaEmail (evento, verificaSeValido) {
    const campoInput = evento.target
    const emailAVerificar = campoInput.value
    const match = usuarios.filter(usuario => usuario.email === emailAVerificar)
    if(match.length > 0) {
      campoInput.setCustomValidity('Este e-mail já está cadastrado.')
    } else {
      campoInput.setCustomValidity('')
    }
    verificaSeValido(evento, "E-mail já utilizado.")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage  produtos={produtos}/>}/>
        <Route path='/produto' element={<PaginaProduto produtos={produtos}/>}/>
        <Route path='/cadastroProduto' element={<PaginaCadastroProduto salvaProduto={salvaProduto} produtos={produtos} categorias={categorias}/>}/>
        <Route path='/login' element={<PaginaLogin produtos={produtos} aoLogar={logar}/>}/>
        <Route path='/cadastroUsuario' element={<PaginaCadastroUsuario produtos={produtos} aoUsuarioCadastrado={salvaUsuario} verificaEmail={validaEmail}/>}/>
        <Route path='/recuperarSenha' element={<PaginaRecuperarSenha produtos={produtos}/>}/>
        <Route path='/*' element={<PaginaErro404 produtos={produtos}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;