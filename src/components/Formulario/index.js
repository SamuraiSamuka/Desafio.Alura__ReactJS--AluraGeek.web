import './Formulario.css'

const Formulario = ({titulo, children, onsubmit}) => {
    return (
        <form action="" className="formulario" onSubmit={evento => onsubmit(evento)}>
            <h4 className="formulario__titulo">{titulo}</h4>
            {children}
        </form>
    )
}

export default Formulario