import './CampoTexto.css'

const CampoTexto = ({children}) => {
    return (
        <div className="campo-texto">
            <label className="campo-texto__label">{children}</label>
            <input type="text" className="campo-texto__input" />
        </div>
    )
}

export default CampoTexto