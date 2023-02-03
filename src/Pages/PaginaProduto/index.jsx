import Cabecalho from "components/Cabecalho";
import ProdutoDetalhado from "components/ProdutoDetalhado";
import Rodape from "components/Rodape";
import SecaoProduto from "components/SecaoProduto";

export default function PaginaProduto({produtos}) {
  const produto = produtos[2]
  return (
    <>
      <Cabecalho />
      <ProdutoDetalhado 
        nome={produto.nome}
        preco={produto.preco}
        descricao={produto.descricao}
        imagem_src={produto.imagem_src}
        id={produto.id}
      />
      <SecaoProduto produtos={produtos} categoria="star-wars">Produtos semelhantes</SecaoProduto>
      <Rodape />
    </>
  )
}
