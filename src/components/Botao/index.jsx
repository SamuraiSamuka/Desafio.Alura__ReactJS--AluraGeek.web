import { Link } from 'react-router-dom'
import './Botao.css'

const Botao = ({children, type, aparencia, link, comportamento }) => {
    return (
        aparencia === undefined ?
            <button type={type || 'submit'} href={link} className="botao botao--azul" onClick={comportamento}>{children}</button>
        : aparencia === 'transparente'?
        <Link type={type || 'button'} to={link} className="botao botao--transparente" onClick={comportamento}>{children}</Link>
        : aparencia === 'cinza'?
        <button type={type || 'button'} href={link} className="botao botao--cinza" onClick={comportamento}>{children}</button>
        : ''
    )
}

export default Botao