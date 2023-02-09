import Botao from 'components/Botao'
import { Link } from 'react-router-dom'
import './Produto.css'

const Produto = ({source, name, price, id}) => {
    function carregaProduto () {
        console.log()
    }

    function aplicaPatternRealBra(valor){
        return "R$ " + valor.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
    <div onClick={carregaProduto} className='product'>
        <img className='product__image' alt="" src={source}/>
        <div className='product__info'>
            <p className='product__title'>{name}</p>
            <p className='product__price'>{aplicaPatternRealBra(price)}</p>
            <Link className='product__link' to={`/produto/${id}`}>Ver produto</Link>
        </div>
    </div>)
}

export default Produto