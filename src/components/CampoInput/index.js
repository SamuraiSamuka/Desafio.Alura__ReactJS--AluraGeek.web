import './CampoInput.css'
import Botao from '../Botao'

const CampoInput = ({id, children, type, minimo, maximo, required, mensagemErro, onChange}) => {

    let categorias = ["", "Star Wars", "Consoles", "Roupas", "Diversos"]

    return (
        type === "select"?
            <div className='campo-selecao'>
                <div className="campo">
                    <label className="campo__label">{children}</label>
                    <select className="campo__input" required={required}>
                        {categorias.map((categoria, i) =>{
                            return <option>{categoria}</option>
                        })}
                    </select>
                </div>
                <Botao type="button" aparencia='transparente'><span class="material-symbols-outlined campo-selecao__adicionar-opcao">add</span></Botao>
            </div>    
        : type === "textarea"?
            <div className="campo campo-textarea">
                <textarea id={id} cols="auto" rows="auto" className="campo-textarea__input" placeholder={children} minLength={minimo} maxLength={maximo} required={required}></textarea>
            </div>
        :
            <div className="campo" id={id}>
                <label className="campo__label">{children}</label>
                <input className="campo__input" onChange={onChange} type={type || "text"} minLength={minimo} maxLength={maximo} required={required}/>
                <span className='erro'>{mensagemErro}</span>
            </div>
    )
}

export default CampoInput