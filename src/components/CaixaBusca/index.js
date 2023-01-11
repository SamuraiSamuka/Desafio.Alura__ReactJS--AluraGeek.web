import { useState } from 'react'
import Resultado from '../Resultado';
import './CaixaBusca.css'

const CaixaDeBusca = ({produtos}) => {
    const [resultados, setResultados] = useState([{nulo:true}])
    
    const mostraInput = (evento) => {
        const input = evento.target.value.toLowerCase()
        
        if (input.length > 1){
            const lista = produtos.filter(
                produto => (produto.nome.toLowerCase().indexOf(input) !== -1) ? 
                    produto
                    :false)
            setResultados(lista)
        } else {
            setResultados([{nulo:true}])
            console.log(resultados)
        }
    }

    return (
        <div className="caixa-busca">
            <div className="caixa-busca__inputs">
                <input type="text" className="caixa-busca__input" onChange={mostraInput} placeholder="O que deseja encontrar?" id="inputBusca" />
                <span className="material-symbols-outlined caixa-busca__lupa">search</span>
            </div>
            <div className="caixa-busca__resultados" id="resultados">
                { resultados.length === 0 ? 
                    <Resultado key={0}>Produto não encontrado</Resultado>
                    : 
                    resultados[0].nulo === true ? 
                        '':    
                        resultados.map((produto) => <Resultado key={produto.id || 0} link={produto.imagem_src}>{produto.nome}</Resultado>)}
            </div>
        </div>
    )
}

export default CaixaDeBusca