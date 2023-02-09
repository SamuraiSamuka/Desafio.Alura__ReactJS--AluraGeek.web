import Botao from 'components/Botao'
import CampoInput from 'components/CampoInput'
import Formulario from 'components/Formulario'
import './EsqueciSenha.css'

const EsqueciSenha = function () {
    return (
        <div className='formulario-container container'>
            <Formulario titulo="Digite seu e-mail:">
                <CampoInput type="email" required>E-mail</CampoInput>
                <Botao type="submit">Recuperar senha por e-mail</Botao>
            </Formulario>
        </div>
    )
}

export default EsqueciSenha