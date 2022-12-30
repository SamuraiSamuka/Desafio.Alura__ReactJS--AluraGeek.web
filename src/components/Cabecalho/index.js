import Botao from '../Botao'
import CaixaDeBusca from '../CaixaBusca'
import Logo from '../Logo'
import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <div className='cabecalho container'>
            <Logo />
            <CaixaDeBusca />
            <Botao tipo="login">Login</Botao>
            {/* <span class="cabecalho__pesquisa__icone-mobile material-symbols-outlined" id="lupaPesquisa">search</span> */}
        </div>
    )
}

export default Cabecalho