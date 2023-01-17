import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroUsuario.css'

const CadastroUsuario = () => {
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

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Cadastro de usuário">
                <CampoInput type="radio" opcoesLista={["Cliente", "Lojista"]} required>Tipo de usuário:</CampoInput>
                <CampoInput minimo="4" required>Nome completo</CampoInput>
                <CampoInput type="date" validacaoCustomizada={verificaIdade} required>Data de nascimento</CampoInput>
                <CampoInput type="email" required>E-mail</CampoInput>
                <CampoInput id="senha" minimo={6} required>Senha</CampoInput>
                <CampoInput id="confirmaSenha" validacaoCustomizada={verificaSenha} required>Confirme sua senha</CampoInput>
                <Botao type="submit">Cadastrar usuário</Botao>
            </Formulario>
        </div>
    )
}

export default CadastroUsuario