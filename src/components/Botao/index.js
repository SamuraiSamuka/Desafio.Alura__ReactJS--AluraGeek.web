import './Botao.css'

const Botao = ({children, tipo, link, comportamento }) => {
    return (
        tipo === 'login'?
        <a href={link} className="botao botao--login" onClick={comportamento}>{children}</a>
        : tipo === undefined ?
        <a href={link} className="botao botao--azul" onClick={comportamento}>{children}</a>
        : tipo === 'carrinho' ?
        <a href={link} className="botao botao--carrinho botao--azul" onClick={comportamento}>{children}</a>
        : ''
    )
}

export default Botao