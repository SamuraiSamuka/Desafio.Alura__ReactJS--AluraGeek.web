import './App.css';
import { useState, useEffect } from 'react';
import SecaoProduto from './components/SecaoProduto';
import Cabecalho from './components/Cabecalho';

function App() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(resposta => resposta.json())
      .then(dados => {
        console.log(dados)
        setProdutos(dados)
      })
  }, [])
    
  return (
    <div className="App">
      <Cabecalho />
      <SecaoProduto produtos={produtos.filter(produto=>produto.categoria==="star_wars")}>Star Wars</SecaoProduto>
      <SecaoProduto produtos={produtos.filter(produto=>produto.categoria==="consoles")}>Consoles</SecaoProduto>
      <SecaoProduto produtos={produtos.filter(produto=>produto.categoria==="diversos")}>Diversos</SecaoProduto>
    </div>
  );
  // Falta adicionar as imagens da seção Diversos
}

export default App;
