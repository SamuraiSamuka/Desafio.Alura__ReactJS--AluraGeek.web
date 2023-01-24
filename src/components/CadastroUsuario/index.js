import { useState } from 'react'
import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroUsuario.css'

const CadastroUsuario = ({aoUsuarioCadastrado}) => {

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [tipoUsuario, setTipoUsuario] = useState('')
    const [nascimentoUsuario, setNascimentoUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')

    const verificaSenha = function (evento, verificaSeValido) {
        const senhaSecundaria = evento.target
        const senhaPrimaria = document.querySelector('#senha')
        if(senhaSecundaria.value === senhaPrimaria.value) {
            senhaSecundaria.setCustomValidity('')
        } else {
            senhaSecundaria.setCustomValidity("As senhas são diferentes")
        }
        verificaSeValido(evento, "As senhas diferem")
    }

    const verificaEmail = function () {
        
    }

    const verificaIdade = function (evento, verificaSeValido){
        const campoData = evento.target
        const dataNascimento = new Date(campoData.value);
        const dataAtual = new Date();
        const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDay())

        if(dataAtual >= dataMais18){
            campoData.setCustomValidity('')
        }
        else {
            campoData.setCustomValidity("É nescessário ter 18 anos ou mais.")
        }
        verificaSeValido(evento, "Não é maior de idade")
    }

    function aoSalvar(evento){
        evento.preventDefault()
        aoUsuarioCadastrado({nome: nomeUsuario, tipo: tipoUsuario, nascimento: nascimentoUsuario, email: emailUsuario, senha: senhaUsuario })
    }

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Cadastro de usuário" onsubmit={aoSalvar}>
                <CampoInput 
                    type="radio" 
                    opcoesLista={["Cliente", "Lojista"]}
                    aoAlterado={evento => {setTipoUsuario(evento.target.value)}}
                    valor={tipoUsuario}
                    required
                >Tipo de usuário:</CampoInput>
                <CampoInput 
                    minimo="4" 
                    aoAlterado={evento => {setNomeUsuario(evento.target.value)}}
                    valor={nomeUsuario}
                    required
                >Nome completo</CampoInput>
                <CampoInput 
                    type="date" 
                    validacaoCustomizada={verificaIdade} 
                    aoAlterado={evento => {setNascimentoUsuario(evento.target.value)}}
                    valor={nascimentoUsuario}
                    required
                >Data de nascimento</CampoInput>
                <CampoInput 
                    type="email"
                    aoAlterado={evento => {setEmailUsuario(evento.target.value)}}
                    valor={emailUsuario}
                    validacaoCustomizada={verificaEmail}
                    required
                >E-mail</CampoInput>
                <CampoInput 
                    id="senha" 
                    minimo={6} 
                    aoAlterado={evento => {setSenhaUsuario(evento.target.value)}}
                    valor={senhaUsuario}
                    required
                >Senha</CampoInput>
                <CampoInput 
                    id="confirmaSenha" 
                    validacaoCustomizada={verificaSenha} 
                    required
                >Confirme sua senha</CampoInput>
                <Botao type="submit">Cadastrar usuário</Botao>
            </Formulario>
        </div>
    )
}

export default CadastroUsuario