import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import dados from 'db.json'

import PaginaInicial from 'Pages/PaginaInicial';
import PaginaProduto from 'Pages/PaginaProduto';
import CadastroUsuario from 'components/CadastroUsuario';
import Erro404 from 'components/Erro404';
import EsqueciSenha from 'components/EsqueciSenha';
import PaginaCadastroProduto from 'Pages/PaginaCadastroProduto';
import Login from 'components/Login';
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';


function AppRoutes() {

  const produtosIniciais = dados.produtos.map(produto => {
    let produtoConvertido = {
      id: uuidv4(),
      nome: produto.nome,
      imagem_src: produto.imagem_src,
      categoria: produto.categoria,
      descricao: produto.descricao,
      preco: parseFloat(produto.preco),
      data_criacao: new Date()}
    return produtoConvertido
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<><Cabecalho produtos={produtos}/><Outlet/><Rodape /></>}>
        <Route index  element={<PaginaInicial  produtos={produtos}/>} />
        <Route 
          path='produto/:id' 
          element={<PaginaProduto/>}
          loader={({ params }) => { 
            const produtoAtual = produtos.find(produto => produto.id === params.id)
            return {produtos, produtoAtual} }}/>
        <Route 
          path='cadastrarProduto' 
          element={<PaginaCadastroProduto salvaProduto={salvaProduto} produtos={produtos} categorias={categorias}/>}/>
        <Route 
          path='login' 
          element={<main className="principal"><Login aoLogar={logar}/></main>}/>
        <Route 
          path='cadastrarUsuario' 
          element={<main className="principal">
            <CadastroUsuario aoUsuarioCadastrado={salvaUsuario} verificaEmail={validaEmail}></CadastroUsuario>
          </main>}/>
        <Route 
          path='recuperarSenha' 
          element={<main className="principal"><EsqueciSenha /></main>}/>
        <Route 
          path='/*' 
          element={<main className='principal'><Erro404 /></main>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}


export default AppRoutes;