import { useState } from 'react'
import Resultado from '../resultado';
import './CaixaBusca.css'

const CaixaDeBusca = ({produtos}) => {
    const [resultados, setResultados] = useState([{}])
    
    const mostraInput = (evento) => {
        const input = evento.target.value.toLowerCase()
        
        if (input.length > 1){
            const lista = produtos.filter(produto => {
                if(produto.nome.toLowerCase().indexOf(input) !== -1){
                    return produto
                }
            })
            setResultados(lista)
        } else {
            setResultados([{nulo:true}])
        }
    }

    return (
        <div className="caixa-busca">
            <div className="caixa-busca__inputs">
                <input type="text" className="caixa-busca__input" onChange={mostraInput} placeholder="O que deseja encontrar?" id="inputBusca" />
                <span className="material-symbols-outlined caixa-busca__lupa">search</span>
            </div>
            <div className="caixa-busca__resultados" id="resultados">
                { resultados.length === 0 ? <Resultado key={0}>Produto não encontrado</Resultado>: resultados[0].nulo === undefined ? resultados.map((produto) => <Resultado key={produto.id} link={produto.imagem_src}>{produto.nome}</Resultado>): '' }
            </div>
        </div>
    )
}

export default CaixaDeBusca