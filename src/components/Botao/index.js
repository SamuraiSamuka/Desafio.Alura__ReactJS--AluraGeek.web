import './Botao.css'

const Botao = ({children, tipo, link }) => {
    return (
        tipo === 'login'?
        <a href={link} className="botao botao--login" >{children}</a>
        : tipo === undefined ?
        <a href={link} className="botao botao--azul" >{children}</a>
        : ""
    )
}

export default Botao