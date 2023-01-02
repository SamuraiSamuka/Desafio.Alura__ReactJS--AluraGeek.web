import Botao from '../Botao'
import './Banner.css'

const Banner = (props) => {
    return (
        <div className='banner__container container' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.195) 40%, #0009 100%), url('./Images/banner-2.webp')"}}>
            <div className='banner'>
                <h1 className='banner__titulo efeitos'>Dezembro Promocional</h1>
                <h3 className='banner__sub-titulo efeitos'>Produtos com até 33% de desconto</h3>
                <Botao link='#diversos'>Ver Diversos</Botao>
            </div>
        </div>
    )
}

export default Banner