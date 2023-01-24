import './CampoInput.css'
import Botao from '../Botao'

const CampoInput = ({id, type, children, valor, minimo, maximo, required, aoAlterado, validacaoCustomizada, opcoesLista, addOpcao, icone, comportamentoIcone}) => {

    function verificaSeValido (evento, mensagemErroCustomizada) {
        const campoInput = evento.target
        const campoCaixa = campoInput.parentNode
        const campoLabel = campoCaixa.querySelector('.campo__label')
        const iconeErro = campoCaixa.querySelector('.campo__erro__icone')
        const campoMensagemErro = campoCaixa.querySelector('.campo__erro')

        if(campoInput.value !== "" && !campoInput.validity.valid) {
            iconeErro.style.display = "block"
            campoCaixa.classList.add('campo__animacao__erro')
            campoLabel.classList.add('campo__animacao__erro')
            campoMensagemErro.textContent = geraMensagemErro(campoInput, mensagemErroCustomizada)
            campoMensagemErro.style.display = "block"
        } else {
            iconeErro.style.display = "none"
            campoMensagemErro.textContent = ""
            campoMensagemErro.style.display = "none"
            campoCaixa.classList.remove('campo__animacao__erro')
            campoLabel.classList.remove('campo__animacao__erro')
        }

    }

    function geraMensagemErro(campoInput, mensagemErroCustomizada) {
        const tiposErros = ['valueMissing', 'tooShort', 'typeMismatch', 'patternMismatch', 'customError']
        const mensagensErro = {
            valueMissing: "O campo está vazio",
            tooShort: `Mínimo de ${minimo} caracteres`,
            typeMismatch: `${type} inválido(a)`,
            customError: mensagemErroCustomizada
        }
        let mensagem = ''

        tiposErros.forEach(tipoErro => {
            if (campoInput.validity[tipoErro] === true) {
                mensagem = mensagensErro[tipoErro]
            }
        })

        return mensagem
    }

    
    return (
        type === "select"?
            <div className='campo-selecao'>
                <div className="campo">
                    <label className="campo__label">{children}</label>
                    <select className="campo__input" id={id} onChange={evento => aoAlterado? aoAlterado(evento): '' } value={valor} required={required}>
                        <option key={0}></option>
                        {opcoesLista.map((item, i) =>{
                            return <option key={item}>{item}</option>
                        })}
                    </select>
                    <span className="material-symbols-outlined campo__erro__icone">error</span>
                    <span className='campo__erro'></span>
                </div>
                {addOpcao === "true" ?
                    <Botao type="button" aparencia='cinza'><span className="material-symbols-outlined campo-selecao__adicionar-opcao">add</span></Botao>
                : ''
                }
            </div>    

        : type === "textarea"?
            <div className="campo campo-textarea">
                <textarea 
                    id={id}
                    cols="auto"
                    rows="auto"
                    className="campo-textarea__input"
                    placeholder={children}
                    minLength={minimo}
                    maxLength={maximo}
                    onChange={evento => aoAlterado? aoAlterado(evento): '' }
                    value={valor}
                    required={required}></textarea>
            </div>

        : type === "radio" ?
            <div id={id} className='campo-radio'>
                <label className='radio-titulo'>{children}</label>
                {opcoesLista.map(item => {
                    return (
                        <div className='radio-opcao' key={item}>
                            <input name="radio-input" type="radio" id={"radio-".concat(item)} required={required}></input>
                            <label htmlFor={"radio-".concat(item)}>{item}</label>
                        </div>
                    )
                })}
            </div>

        :
            <div className="campo">
                <label className="campo__label">{children}</label>
                <input 
                    className="campo__input" 
                    id={id} 
                    type={type || "text"}
                    onBlur={(evento) => {
                        verificaSeValido(evento); 
                        if(validacaoCustomizada){ validacaoCustomizada(evento, verificaSeValido) };
                    }}
                    onChange={evento => aoAlterado? aoAlterado(evento): '' }
                    minLength={minimo} 
                    maxLength={maximo}
                    value={valor}
                    required={required}/>
                <span className="material-symbols-outlined campo__icone" onClick={evento => comportamentoIcone(evento)}>{icone}</span>
                <span className="material-symbols-outlined campo__erro__icone">error</span>
                <span className='campo__erro'></span>
            </div>
    )
}

export default CampoInput