const Resultado = ({children, link}) => {
    return (
        <a className="caixa-busca__resultados__item" href={link}>{children}</a>
    )
}

export default Resultado