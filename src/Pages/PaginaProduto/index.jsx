import Erro404 from "components/Erro404";
import ProdutoDetalhado from "components/ProdutoDetalhado";
import SecaoProduto from "components/SecaoProduto";
import { useParams, useLoaderData } from "react-router-dom";

export default function PaginaProduto() {
  const {produtos, produtoAtual} = useLoaderData();

  // if (!produtoAtual) {
  //   return (
  //     <main className="principal"><Erro404/></main>
  //   )
  // }

  return (
    <>
    <main className="principal">
      <ProdutoDetalhado 
        nome={produtoAtual.nome}
        preco={produtoAtual.preco}
        descricao={produtoAtual.descricao}
        imagem_src={produtoAtual.imagem_src}
        id={produtoAtual.id}
      />
      <SecaoProduto produtos={produtos} categoria="star-wars">Produtos semelhantes</SecaoProduto>
    </main>
    </>
  )
}
