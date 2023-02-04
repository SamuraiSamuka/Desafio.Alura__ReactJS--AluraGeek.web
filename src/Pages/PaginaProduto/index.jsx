import ProdutoDetalhado from "components/ProdutoDetalhado";
import SecaoProduto from "components/SecaoProduto";

export default function PaginaProduto({produtos}) {
  const produto = produtos[2]
  return (
    <>
    <main className="principal">
      <ProdutoDetalhado 
        nome={produto.nome}
        preco={produto.preco}
        descricao={produto.descricao}
        imagem_src={produto.imagem_src}
        id={produto.id}
      />
      <SecaoProduto produtos={produtos} categoria="star-wars">Produtos semelhantes</SecaoProduto>
    </main>
    </>
  )
}
