import Formulario from 'components/Formulario'
import Logo from 'components/Logo'
import CampoInput from 'components/CampoInput'
import Botao from 'components/Botao'
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
                        <a href="#null" className="saiba-mais__nav__link">Quem somos nós</a>
                        <a href="#null" className="saiba-mais__nav__link">Política de privacidade</a>
                        <a href="#null" className="saiba-mais__nav__link">Programa fidelidade</a>
                        <a href="#null" className="saiba-mais__nav__link">Nossas lojas</a>
                        <a href="#null" className="saiba-mais__nav__link">Quero ser franqueado</a>
                        <a href="#null" className="saiba-mais__nav__link">Anuncia aqui</a>
                    </nav>
                </div>
                <div className="contato-container saiba-mais__grid">
                    <Formulario titulo="Fale conosco">
                        <CampoInput minimo={4} maximo={40} required>Nome</CampoInput>
                        <CampoInput type="textarea" maximo={350} required>Escreva sua mensagem</CampoInput>
                        <Botao type="submit">Enviar mensagem</Botao>
                    </Formulario>
                </div>
            </div>
            <div className="sobre container">
                <p className="sobre__direito-autoral">Desenvolvido por Samuel</p>
                <p className="sobre__ano">2023</p>
            </div>
        </footer>
    )
}

export default Rodape