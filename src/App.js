import './App.css';
import { useState, useEffect } from 'react';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
// import Banner from './components/Banner';
// import SecaoProduto from './components/SecaoProduto';
// import ProdutoDetalhado from './components/ProdutoDetalhado';
import Login from './components/Login';

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
        <Login />
      </main>
      <Rodape />
    </div>
  );
}


export default App;
