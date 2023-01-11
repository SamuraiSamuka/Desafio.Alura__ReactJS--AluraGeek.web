import Formulario from '../Formulario'
import Logo from '../Logo'
import CampoTextArea from '../CampoTextArea'
import CampoTexto from '../CampoTexto'
import Botao from '../Botao'
import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <div className="saiba-mais container">
                <div className="logo-container saiba-mais__grid">
                    <Logo />
                </div>
                <div className="links-container saiba-mais__grid">
                    <nav className="saiba-mais__nav">
                        <a href="#" className="saiba-mais__nav__link">Quem somos nós</a>
                        <a href="#" className="saiba-mais__nav__link">Política de privacidade</a>
                        <a href="#" className="saiba-mais__nav__link">Programa fidelidade</a>
                        <a href="#" className="saiba-mais__nav__link">Nossas lojas</a>
                        <a href="#" className="saiba-mais__nav__link">Quero ser franqueado</a>
                        <a href="#" className="saiba-mais__nav__link">Anuncia aqui</a>
                    </nav>
                </div>
                <div className="contato-container saiba-mais__grid">
                    <Formulario titulo="Fale conosco">
                        <CampoTexto>Nome</CampoTexto>
                        <CampoTextArea></CampoTextArea>
                        <Botao>Enviar mensagem</Botao>
                    </Formulario>
                </div>
            </div>
            <div className="sobre container">
                <p className="sobre__direito-autoral">Desenvolvido por Samuel</p>
                <p className="sobre__ano">2021</p>
            </div>
        </footer>
    )
}

export default Rodape