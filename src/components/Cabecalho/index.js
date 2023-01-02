import Botao from '../Botao'
import CaixaDeBusca from '../CaixaBusca'
import Logo from '../Logo'
import './Cabecalho.css'

const mostrarCaixaBusca = (evento) => {
    let close = document.querySelector('#close')
    let caixaBusca = document.querySelector('.caixa-busca')
    let cabecalho = document.querySelector('.cabecalho')

    evento.target.style.display = "none"
    close.style.display = "inline"

    caixaBusca.style.display = "flex"
    cabecalho.style.marginBottom = '50px'
    cabecalho.style.transition = '0.5s'
}

const esconderCaixaBusca = (evento) => {
    let lupa = document.querySelector('#lupa')
    let caixaBusca = document.querySelector('.caixa-busca')
    let cabecalho = document.querySelector('.cabecalho')

    evento.target.style.display = "none"
    lupa.style.display = "inline"
    
    caixaBusca.style.display = "none"
    cabecalho.style.marginBottom = 0
}

const Cabecalho = ({produtos}) => {
    return (
        <div className='cabecalho container'>
            <Logo />
            <CaixaDeBusca produtos={produtos}/>
            <Botao tipo="login">Login</Botao>
            <span onClick={mostrarCaixaBusca} id="lupa" className="caixa-busca__lupa-mobile material-symbols-outlined">search</span>
            <span onClick={esconderCaixaBusca} id="close" className="caixa-busca__close-mobile material-symbols-outlined">close</span>
        </div>
    )
}

export default Cabecalho