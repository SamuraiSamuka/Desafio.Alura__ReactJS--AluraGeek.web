import Erro404 from "components/Erro404";
import ProdutoDetalhado from "components/ProdutoDetalhado";
import SecaoProduto from "components/SecaoProduto";
import { useParams } from "react-router-dom";

export default function PaginaProduto({produtos}) {
  const id = useParams().id;

  const produto = produtos.find(produto => produto.id === id)

  if (!produto) {
    return (
      <Erro404></Erro404>
    )
  }

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
