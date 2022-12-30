import './SecaoProduto.css'
import Produto from "../Produto"

const SecaoProduto = ({produtos, children}) => {
    return (
    <div className="products-section container">
        <div className="products-section__header">
            <h2 className="products-section__title" id="title">{children}</h2>
            <a href="" className="products-section__seeAll">Ver tudo
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
        </div>
        <div className="products-section__body">
            {produtos.map((produto, i) => i < 6 ? <Produto key={i} name={produto.nome} price={produto.preco} source={produto.imagem_src}></Produto>: "")}
        </div>
    </div>)
}

export default SecaoProduto