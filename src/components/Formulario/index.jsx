import './Formulario.css'

const Formulario = ({titulo, children, onsubmit}) => {
    return (
        <fieldset>
        <form action="" className="formulario" onSubmit={evento => onsubmit(evento)}>
            <h4 className="formulario__titulo">{titulo}</h4>
            {children}
        </form>
        </fieldset>
    )
}

export default Formulario