import Botao from '../Botao'
import CampoTextArea from '../CampoTextArea'
import CampoTexto from '../CampoTexto'
import './FormularioContato.css'

const FormularioContato = ({titulo}) => {
    return (
        <form action="" className="formulario">
            <h4 className="formulario__titulo">{titulo}</h4>
            <CampoTexto>Nome</CampoTexto>
            <CampoTextArea></CampoTextArea>
            <Botao>Enviar mensagem</Botao>
        </form>
    )
}

export default FormularioContato