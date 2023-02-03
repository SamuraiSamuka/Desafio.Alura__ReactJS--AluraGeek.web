import Cabecalho from 'components/Cabecalho'
import Erro404 from 'components/Erro404'
import Rodape from 'components/Rodape'

export default function PaginaErro404({produtos}) {
    return (
        <>
            <Cabecalho produtos={produtos}/>
            <main className='principal'>
                <Erro404 />
            </main>
            <Rodape />
        </>
    )
}
