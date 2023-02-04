import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {

    return (
        <Link to="/" className="logo__link"><img src="./logo.svg" alt="logo do alura Geek" className="logo__imagem" /></Link>
    )
}

export default Logo