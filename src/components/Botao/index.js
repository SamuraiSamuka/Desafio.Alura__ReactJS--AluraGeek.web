import './Botao.css'

const Botao = ({children, type, aparencia, link, comportamento }) => {
    return (
        aparencia === undefined ?
            <button type={type || 'submit'} href={link} className="botao botao--azul" onClick={comportamento}>{children}</button>
        : aparencia === '100vw'?
            <button type={type || 'submit'} href={link} className="botao botao--azul botao--100vw" onClick={comportamento}>{children}</button>
        : aparencia === 'login'?
            <button type={type || 'submit'} href={link} className="botao botao--login" onClick={comportamento}>{children}</button>
        : ''
    )
}

export default Botao