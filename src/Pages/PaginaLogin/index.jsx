import Cabecalho from "components/Cabecalho";
import Login from "components/Login";
import Rodape from "components/Rodape";

export default function PaginaLogin({aoLogar, produtos}) {
  return (
    <>
    <Cabecalho produtos={produtos}/>
    <main className="principal">
      <Login aoLogar={aoLogar}/>
    </main>
    <Rodape />
    </>
  )
}
