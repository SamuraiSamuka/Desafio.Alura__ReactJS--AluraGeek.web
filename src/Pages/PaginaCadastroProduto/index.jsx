import CadastroProduto from "components/CadastroProduto";
import SecaoProduto from "components/SecaoProduto";
import { useLoaderData } from "react-router-dom";

export default function PaginaCadastroProduto({salvaProduto}) {
  const {categorias, produtos} = useLoaderData();
  return (
    <>
      <main className='principal'>
        <CadastroProduto aoProdutoCadastrado={salvaProduto} categorias={categorias}/>
        <SecaoProduto produtos={produtos.sort((a, b)=>{
        if(a.data_criacao > b.data_criacao){
          return -1
        }
        if(a.data_criacao < b.data_criacao){
          return 1
        }
        return 0
        })}>Adicionados recentemente</SecaoProduto>
      </main>
    </>
  )
}
