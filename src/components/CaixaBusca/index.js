import { useEffect, useState } from 'react'
import './CaixaBusca.css'

const CaixaDeBusca = ({produtos}) => {
    const mostraInput = (evento) => {
        const input = evento.target.value.toLowerCase
        const resultados = document.querySelector('#resultados')
        let lista = produtos.map(produto => {
            if(produto.nome.indexOf(input) != -1){
                return produto
            }
        })
        console.log(lista)
    }

    const [resultados, setResultados] = useState([[]])

    return (
        <div className="caixa-busca">
            <div className="caixa-busca__inputs">
                <input type="text" className="caixa-busca__input" onChange={mostraInput} placeholder="O que deseja encontrar?" id="inputBusca" />
                <span className="material-symbols-outlined caixa-busca__lupa">search</span>
            </div>
            <div className="caixa-busca__resultados" id="resultados">
                <a className="caixa-busca__resultados__item" id='itemTeste'></a>
            </div>
        </div>
    )
}

export default CaixaDeBusca