import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dados from './db.json'
import LandingPage from './Pages/LandingPage';
import PaginaProduto from 'Pages/PaginaProduto';
import PaginaCadastroUsuario from 'Pages/PaginaCadastroUsuario';
import PaginaErro404 from 'Pages/PaginaErro404';
// import PaginaCadastroProduto from 'Pages/PaginaCadastroProduto';
// import PaginaLogin from 'Pages/PaginaLogin';
// import ProdutoDetalhado from './components/ProdutoDetalhado';
// import Login from './components/Login';
// import CadastroProduto from './components/CadastroProduto';
// import CadastroUsuario from './components/CadastroUsuario';
// import EsqueciSenha from './components/EsqueciSenha';
console.log(dados.produtos)
function App() {
  
  const produtosIniciais = dados.produtos.map(produto => {
    produto = {id: uuidv4(), ...produto, data_criacao: new Date()}
    return produto
  })

  console.log(produtosIniciais[0].categoria === "star wars")

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
    <div className="App">
      {/* <LandingPage produtos={produtos}/> */}
      {/* <PaginaProduto produtos={produtos}/> */}
      {/* <PaginaCadastroProduto salvaProduto={salvaProduto} produtos={produtos} categorias={categorias}/> */}
      {/* <PaginaLogin produtos={produtos} aoLogar={logar}/> */}
      {/* <PaginaCadastroUsuario produtos={produtos} aoUsuarioCadastrado={salvaUsuario} verificaEmail={validaEmail}/> */}
      <PaginaErro404 produtos={produtos}/>
    </div>
  );
}


export default App;