import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import Banner from 'components/Banner';
import SecaoProduto from 'components/SecaoProduto';

export default function LandingPage({produtos}) {

  return (
    <>
    <Cabecalho produtos={produtos}/>
      <Banner></Banner>
      <main className='principal'>
        <SecaoProduto 
          produtos={produtos.filter(produto => produto.categoria === "star wars")} 
          categoria="star_wars"
        >Star Wars</SecaoProduto>
        <SecaoProduto 
          produtos={produtos.filter(produto => produto.categoria === "consoles")} 
          categoria="star_wars"
        >Diversos</SecaoProduto>
        <SecaoProduto 
          produtos={produtos.filter(produto => produto.categoria === "roupas")} 
          categoria="roupas"
        >Roupas</SecaoProduto>
      </main>
      <Rodape />
      </>
  )
}
