import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import { Outlet } from "react-router-dom"

export async function loader() {
    const contacts = await 
}

export default function Root() {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}
