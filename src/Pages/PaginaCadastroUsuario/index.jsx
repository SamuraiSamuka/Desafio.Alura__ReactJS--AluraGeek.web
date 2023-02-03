import Cabecalho from "components/Cabecalho"
import CadastroUsuario from "components/CadastroUsuario"
import Rodape from "components/Rodape"

export default function PaginaCadastroUsuario({aoUsuarioCadastrado, verificaEmail}) {
  return (
    <>
    <Cabecalho />
    <CadastroUsuario aoUsuarioCadastrado={aoUsuarioCadastrado} verificaEmail={verificaEmail}></CadastroUsuario>
    <Rodape />
    </>
  )
}
