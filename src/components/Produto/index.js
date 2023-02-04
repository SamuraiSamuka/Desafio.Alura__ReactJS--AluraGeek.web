import './Produto.css'

const Produto = (props) => {
    function carregaProduto () {
        console.log(props)
    }

    return (
    <div onClick={carregaProduto} className='product'>
        <img className='product__image' alt="" src={props.source}/>
        <div className='product__info'>
            <p className='product__title'>{props.name}</p>
            <p className='product__price'>{props.price}</p>
            <a className='product__link' href=''>Ver produto</a>
        </div>
    </div>)
}

export default Produto