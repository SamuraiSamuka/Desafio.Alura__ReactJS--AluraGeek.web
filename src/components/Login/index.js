import './Login.css'
import Formulario from '../Formulario';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';

const Login = () => {
    return (
        <div className='login-container container'>
            <Formulario titulo="Iniciar Sessão">
                <CampoTexto type="email">E-mail</CampoTexto>
                <CampoTexto type="password">Senha</CampoTexto>
                <Botao aparencia="100vw">Entrar</Botao>
            </Formulario>
        </div>
    )
}

export default Login