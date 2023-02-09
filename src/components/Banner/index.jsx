import Botao from 'components/Botao'
import './Banner.css'

const Banner = () => {

    const descerSuavePara = (id) => {
        const destino = document.querySelector(id).offsetTop
        window.scroll({top: destino, behavior: "smooth"})
    }

    return (
        <div className='banner__container container' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.195) 40%, #0009 100%), url('./Images/banner-2.webp')"}}>
            <div className='banner'>
                <h1 className='banner__titulo efeitos'>Dezembro Promocional</h1>
                <h3 className='banner__sub-titulo efeitos'>Produtos com até 33% de desconto</h3>
                <Botao type="button" comportamento={() => {descerSuavePara('#roupas')}}>Ver Roupas</Botao>
            </div>
        </div>
    )
}

//  link='#null' 

export default Banner