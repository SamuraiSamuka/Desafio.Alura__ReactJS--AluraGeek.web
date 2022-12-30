import './CaixaBusca.css'

const CaixaDeBusca = () => {
    return (
        <div className="caixa-busca">
            <div className="caixa-busca__inputs">
                <input type="text" className="caixa-busca__input" placeholder="O que deseja encontrar?" id="inputBusca" />
                <span className="material-symbols-outlined caixa-busca__lupa">search</span>
            </div>
            <div className="caixa-busca__resultados" id="resultados">
                <a>caneca</a>
                <a>pedestal</a>
            </div>
        </div>
    )
}

export default CaixaDeBusca