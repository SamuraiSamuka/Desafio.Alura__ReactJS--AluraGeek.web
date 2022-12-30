import './CaixaBusca.css'

const CaixaDeBusca = () => {
    return (
        <div className="caixa-busca">
            <div className="caixa-busca__inputs">
                <input type="text" className="caixa-busca__input" placeholder="O que deseja encontrar?" id="inputBusca" />
                <span className="material-symbols-outlined caixa-busca__lupa">search</span>
            </div>
            <div className="caixa-busca__resultados" id="resultados">
                <a className="caixa-busca__resultados__item">Caneca</a>
                <a className="caixa-busca__resultados__item">Pedestal</a>
            </div>
        </div>
    )
}

export default CaixaDeBusca