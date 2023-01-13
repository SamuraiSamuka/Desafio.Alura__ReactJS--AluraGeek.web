import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroUsuario.css'

const CadastroUsuario = () => {
    const comparaSenhas = function (evento) {
        let campo = evento.target
        let senhaSecundaria = campo.value
        let senhaPrimaria = document.querySelector('#senha').querySelector('.campo-texto__input').value
        if(senhaPrimaria != senhaSecundaria) {
            campo.setCustomValitidity("As senhas são diferentes")
            console.log(senhaPrimaria, senhaSecundaria)
            console.log(campo.validity)
        }
    }

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Cadastro de usuário">
                <CampoInput required>Nome completo</CampoInput>
                <CampoInput type="date" required>Data de nascimento</CampoInput>
                <CampoInput type="email" required>E-mail</CampoInput>
                <CampoInput id="senha">Senha</CampoInput>
                <CampoInput id="confirmaSenha" onChange={comparaSenhas}>Confirme sua senha</CampoInput>
                <Botao>Cadastrar usuário</Botao>
            </Formulario>
        </div>
    )
}

export default CadastroUsuario