import Cabecalho from "components/Cabecalho";
import CadastroProduto from "components/CadastroProduto";
import SecaoProduto from "components/SecaoProduto";
import Rodape from "components/Rodape";

export default function PaginaCadastroProduto({salvaProduto, produtos, categorias}) {
  return (
    <>
        <Cabecalho  produtos={produtos}/>
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
        <Rodape />
    </>
  )
}
