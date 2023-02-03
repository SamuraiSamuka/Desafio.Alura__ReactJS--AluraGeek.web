import Cabecalho from "components/Cabecalho"
import CadastroUsuario from "components/CadastroUsuario"
import Rodape from "components/Rodape"

export default function PaginaCadastroUsuario({aoUsuarioCadastrado, verificaEmail, produtos}) {
  return (
    <>
    <Cabecalho  produtos={produtos}/>
    <CadastroUsuario aoUsuarioCadastrado={aoUsuarioCadastrado} verificaEmail={verificaEmail}></CadastroUsuario>
    <Rodape />
    </>
  )
}
