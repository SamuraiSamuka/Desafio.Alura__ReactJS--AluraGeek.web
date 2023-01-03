import './App.css';
import { useState, useEffect } from 'react';
import SecaoProduto from './components/SecaoProduto';
import Cabecalho from './components/Cabecalho';
import Banner from './components/Banner';
import Rodape from './components/Rodape';

function App() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('db.json')
      .then(r => r.json())
      .then(d => setProdutos(d.produtos))
  }, [])
    
  return (
    <div className="App">
      <Cabecalho produtos={produtos}/>
      <Banner />
      <main className='principal'>
        <SecaoProduto categoria={'star_wars'} produtos={produtos.filter(produto=>produto.categoria==="star_wars")}>Star Wars</SecaoProduto>
        <SecaoProduto categoria={'consoles'} produtos={produtos.filter(produto=>produto.categoria==="consoles")}>Consoles</SecaoProduto>
        <SecaoProduto categoria={'roupas'} produtos={produtos.filter(produto=>produto.categoria==="roupas")}>Roupas</SecaoProduto>
      </main>
      <Rodape />
    </div>
  );
  // Falta adicionar as imagens da seção Diversos
}

export default App;
