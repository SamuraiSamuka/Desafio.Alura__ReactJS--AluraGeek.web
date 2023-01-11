import './App.css';
import { useState, useEffect } from 'react';
import SecaoProduto from './components/SecaoProduto';
import Cabecalho from './components/Cabecalho';
// import Banner from './components/Banner';
import Rodape from './components/Rodape';
import ProdutoDetalhado from './components/ProdutoDetalhado';

function App() {

  const [produtos, setProdutos] = useState([{}])

  useEffect(() => {
    fetch('db.json')
      .then(r => r.json())
      .then(d => {setProdutos(d.produtos)
      console.log(d)})
  }, [])
    
  return (
    <div className="App">
      <Cabecalho produtos={produtos}/>
      <main className='principal'>
        
      </main>
      <Rodape />
    </div>
  );
}


export default App;
