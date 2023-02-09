import Botao from 'components/Botao'
import './carrinho.css'

export default function Carrinho({ produtos }) {
    function aplicaPatternRealBra(valor) {
        return "R$ " + valor.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="carrinho dont-show">
            <div className="carrinho-header">
                <h1 className="carrinho-titulo">Meu carrinho</h1>
                <h3 className="carrinho-subtitulo">0 itens no carinho</h3>
                <span className="carrinho-close material-symbols-outlined">close</span>
            </div>
            <hr className='carrinho-divisoria' />
            <ul className="carrinho-itens">
                {produtos.map(produto => {
                    return (
                        <li className="carrinho-item" key={produto.id}>
                            <img src={produto.imagem_src} alt="icone do item" className="carrinho-item-imagem" />
                            <div className="carrinho-item-info">
                                <h3 className="carrinho-item-titulo">{produto.nome}</h3>
                                <h3 className="carrinho-item-preco">{aplicaPatternRealBra(produto.preco)}</h3>
                            </div>
                            <span className="carrinho-item-excluir material-symbols-outlined">delete</span>
                        </li>
                    )
                })}
            </ul>
            <hr className='carrinho-divisoria' />
            <div className="carrinho-resumo">
                <h2 className='carrinho-resumo-titulo'>Sub total do carrinho</h2>
                <h3 className='carrinho-total'>{aplicaPatternRealBra(produtos.reduce((acumulador, valorAtual) => { return acumulador + valorAtual.preco }, 0))}</h3>
                <Botao aparencia='transparente' link='/'>Finalizar pedido</Botao>
            </div>
        </div>
    )
}
