import Botao from '../Botao'
import CampoTextArea from '../CampoTextArea'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = ({titulo, children}) => {
    return (
        <form action="" className="formulario">
            <h4 className="formulario__titulo">{titulo}</h4>
            {children}
        </form>
    )
}

export default Formulario