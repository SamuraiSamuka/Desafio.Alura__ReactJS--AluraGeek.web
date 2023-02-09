import { Link } from 'react-router-dom'
import './Logo.css'
import logo from './logo.svg'

const Logo = () => {

    return (
        <Link to="/" className="logo__link"><img src={logo} alt="logo do alura Geek" className="logo__imagem" /></Link>
    )
}

export default Logo