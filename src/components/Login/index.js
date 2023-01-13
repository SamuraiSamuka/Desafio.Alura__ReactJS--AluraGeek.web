import './Login.css'
import Formulario from '../Formulario';
import CampoInput from '../CampoInput';
import Botao from '../Botao';

const Login = () => {
    return (
        <div className='formulario-container container'>
            <Formulario titulo="Iniciar Sessão">
                <CampoInput type="email" required>E-mail</CampoInput>
                <CampoInput type="password" minimo={6} required>Senha</CampoInput>
                <Botao>Entrar</Botao>
                <div className='login-links'>
                    <a className='login-link'>Criar conta</a>
                    <a className='login-link'>Esqueci minha senha</a>
                </div>
            </Formulario>
        </div>
    )
}

export default Login