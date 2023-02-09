import './CampoInput.css'
import Botao from 'components/Botao'
import { useState } from 'react'

const CampoInput = ({id, type, children, valor, minimo, maximo, required, validacaoCustomizada, aoAlterado, opcoesLista, addOpcao, icone, comportamentoIcone}) => {
    const [opcoes, setOpcoes] = useState(opcoesLista)

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

    function mostraCampoAddOpcao(){
        const campoAddOpcao = document.querySelector("#campoAddOpcao")
        const botao = document.querySelector(".campo-selecao__adicionar-opcao")
        botao.classList.toggle('rotate45')
        campoAddOpcao.classList.toggle('dont-show')
    }
    
    function salvaOpcao(){
        const campoAddOpcao = document.querySelector("#campoAddOpcao")
        const botao = document.querySelector(".campo-selecao__adicionar-opcao")

        const valor = campoAddOpcao.querySelector("input").value
        const match = opcoes.filter(item => item === valor)
        if(match.length === 0 && valor.length > 0){
            setOpcoes([...opcoes, valor])
        }

        campoAddOpcao.querySelector("input").value = ""
        botao.classList.toggle('rotate45')
        campoAddOpcao.classList.toggle('dont-show')
    }
    
    return (
        type === "select"?
            <div>
                <div className='campo-selecao'>
                    <div className="campo">
                        <label className="campo__label">{children}</label>
                        <select className="campo__input" id={id} onChange={evento => aoAlterado? aoAlterado(evento): '' } value={valor} required={required}>
                            <option key={0}></option>
                            {opcoes.map((item, i) =>{
                                return <option key={item}>{item}</option>
                            })}
                        </select>
                        <span className="material-symbols-outlined campo__erro__icone">error</span>
                        <span className='campo__erro'></span>
                    </div>
                    {addOpcao === "true" ?
                        <Botao type="button" aparencia='cinza' comportamento={(evento) => {mostraCampoAddOpcao()}}><span className="material-symbols-outlined campo-selecao__adicionar-opcao">add</span></Botao>
                    : ''
                    }
                </div>
                <div id="campoAddOpcao" className='campo-selecao-addOpcao dont-show'>
                    <CampoInput >Digite a nova categoria</CampoInput>
                    <Botao type="button" aparencia='cinza' comportamento={()=>{salvaOpcao()}}><span className="material-symbols-outlined campo-selecao__adicionar-opcao">done</span></Botao>
                </div>
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