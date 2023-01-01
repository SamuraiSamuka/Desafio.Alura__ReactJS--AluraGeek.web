import { useEffect, useState } from 'react'
import './CaixaBusca.css'

const CaixaDeBusca = () => {
    const mostraInput = (evento) => {
        const input = evento.target.value
        const resultado = document.querySelector('#itemTeste')
        input.length > 1 ?
            resultado.innerHTML = `nenhum resultado encontrado para "${input}"`
        : resultado.innerHTML = ""
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