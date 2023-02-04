import './Produto.css'

const Produto = ({source, name, price, id}) => {
    function carregaProduto () {
        console.log()
    }

    return (
    <div onClick={carregaProduto} className='product'>
        <img className='product__image' alt="" src={source}/>
        <div className='product__info'>
            <p className='product__title'>{name}</p>
            <p className='product__price'>{price}</p>
            <a className='product__link' href={`/produto?=${id}`}>Ver produto</a>
        </div>
    </div>)
}

export default Produto