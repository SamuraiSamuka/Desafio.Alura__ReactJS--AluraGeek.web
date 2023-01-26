import './App.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Banner from './components/Banner';
import SecaoProduto from './components/SecaoProduto';
// import ProdutoDetalhado from './components/ProdutoDetalhado';
// import Login from './components/Login';
// import CadastroProduto from './components/CadastroProduto';
// import CadastroUsuario from './components/CadastroUsuario';
// import EsqueciSenha from './components/EsqueciSenha';

function App() {
  const [produtos, setProdutos] = useState([
    {
      id: uuidv4(),
      nome: "Caneca stormer trooper",
      preco: "R$ 60,00",
      imagem_src: "https://http2.mlstatic.com/D_NQ_NP_983755-MLB52879024309_122022-O.webp",
      categoria: "star_wars",
      descricao: "Caneca estilizada, temática star wars.",
      data_criacao: new Date()
    },
    {
      id: uuidv4(),
      nome: "Pedestal Darth vader",
      preco: "R$ 84,90",
      imagem_src: "https://http2.mlstatic.com/D_NQ_NP_809702-MLB51346188833_082022-O.webp",
      categoria: "star_wars",
      descricao: "Luminária Abajur Darth Vader Star Wars Personalizada C/ Nome",
      data_criacao: new Date()
    },
    {
      id: uuidv4(),
      nome: "Boneco Yoda",
      preco: "R$ 69,00",
      imagem_src: "https://http2.mlstatic.com/D_NQ_NP_710970-MLB49580721415_042022-W.webp",
      categoria: "star_wars",
      descricao: "Boneco Action Figure Mestre Yoda Star Wars 12 Cm",
      data_criacao: new Date()
    },
    {
      id: uuidv4(),
      nome: "Boneco Stoomer trooper",
      preco: "R$ 881,00",
      imagem_src: "https://http2.mlstatic.com/D_NQ_NP_800791-MLB46159555870_052021-O.webp",
      categoria: "star_wars",
      descricao: "Boneco Storm Trooper Star Wars Gigante 40cm - Mimo Toys",
      data_criacao: new Date()
    }
  ])

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
    if(match.length === 1){
      if(match[0].senha === loginUsuario.senha){
        setLogin({logado: true, usuario: match[0]})
        if(login.logado) {alert("Logado!")}
      } else {
        alert("Senha incorreta!")
      }
    } else {
      alert("Email não encontrado!")
    }
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
      <Cabecalho produtos={produtos}/>
      <Banner></Banner>
      <main className='principal'>
        <SecaoProduto produtos={produtos} categoria="star_wars">Star Wars</SecaoProduto>
        <SecaoProduto produtos={produtos} categoria="star_wars">Diversos</SecaoProduto>
        <SecaoProduto produtos={produtos} categoria="roupas">Roupas</SecaoProduto>
        {/* <CadastroProduto aoProdutoCadastrado={salvaProduto}/>
        <CadastroUsuario aoUsuarioCadastrado={salvaUsuario} verificaEmail={validaEmail}></CadastroUsuario>
        <Login aoLogar={logar}></Login> */}
        {/* <SecaoProduto produtos={produtos.sort((a, b)=>{
          if(a.data_criacao > b.data_criacao){
            return -1
          }
          if(a.data_criacao < b.data_criacao){
            return 1
          }
          return 0
        })}>Adicionados recentemente</SecaoProduto> */}
      </main>
      <Rodape />
    </div>
  );
}


export default App;
