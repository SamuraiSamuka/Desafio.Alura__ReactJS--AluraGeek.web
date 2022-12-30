import './Botao.css'

const Botao = ({children, tipo }) => {
    return (
        tipo === 'login'?
        <a href="./" className="botao botao--login" >{children}</a>
        : tipo === 'comum'?
        <a href="./" className="botao botao--azul" >{children}</a>
        : ""
    )
}

export default Botao