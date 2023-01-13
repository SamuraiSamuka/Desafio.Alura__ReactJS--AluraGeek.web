import './Botao.css'

const Botao = ({children, type, aparencia, link, comportamento }) => {
    return (
        aparencia === undefined ?
            <button type={type || 'submit'} href={link} className="botao botao--azul" onClick={comportamento}>{children}</button>
        : aparencia === 'transparente'?
        <button type={type} href={link} className="botao botao--transparente" onClick={comportamento}>{children}</button>
        : aparencia === 'cinza'?
        <button type={type} href={link} className="botao botao--cinza" onClick={comportamento}>{children}</button>
        : ''
    )
}

export default Botao