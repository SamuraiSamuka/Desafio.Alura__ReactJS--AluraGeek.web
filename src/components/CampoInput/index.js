import './CampoInput.css'
import Botao from '../Botao'

const CampoInput = ({id, children, type, minimo, maximo, required, opcoes, addOpcao, mensagemErro, onChange}) => {

    return (
        type === "select"?
            <div id={id} className='campo-selecao'>
                <div className="campo">
                    <label className="campo__label">{children}</label>
                    <select className="campo__input" required={required}>
                        <option key={0}></option>
                        {opcoes.map((item, i) =>{
                            return <option key={item}>{item}</option>
                        })}
                    </select>
                </div>
                {addOpcao === "true" ?
                    <Botao type="button" aparencia='cinza'><span className="material-symbols-outlined campo-selecao__adicionar-opcao">add</span></Botao>
                : ''
                }
            </div>    

        : type === "textarea"?
            <div className="campo campo-textarea">
                <textarea id={id} cols="auto" rows="auto" className="campo-textarea__input" placeholder={children} minLength={minimo} maxLength={maximo} required={required}></textarea>
            </div>

        : type === "radio" ?
            <div id={id} className='campo-radio'>
                <label className='radio-titulo'>{children}</label>
                {opcoes.map(item => {
                    return (
                        <div className='radio-opcao' key={item}>
                            <input name="radio-input" type="radio" id={"radio-".concat(item)} required={required}></input>
                            <label htmlFor={"radio-".concat(item)}>{item}</label>
                        </div>
                    )
                })}
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