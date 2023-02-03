import Cabecalho from "components/Cabecalho";
import EsqueciSenha from "components/EsqueciSenha";
import Rodape from "components/Rodape";

export default function PaginaRecuperarSenha({produtos}) {
  return (
    <>
    <Cabecalho  produtos={produtos}/>
    <EsqueciSenha />
    <Rodape />
    </>
  )
}
