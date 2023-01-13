import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroProduto.css'

const CadastroProduto = () => {
    return (
        <div className='formulario-container container'>
            <Formulario titulo="Adicionar novo produto">
                <CampoInput minimo="5" maximo="50" required>Nome do produto</CampoInput>
                <CampoInput type="select" opcoes={["Star Wars", "Consoles", "Roupas", "Diversos"]} addOpcao="true" required>Categoria</CampoInput>
                <CampoInput required>Preço do produto</CampoInput>
                <CampoInput type="url" required>URL da imagem</CampoInput>
                <CampoInput type="textarea" minimo={5} maximo={400} required>Descrição do produto</CampoInput>
                <Botao type="submit">Adicionar produto</Botao>
            </Formulario>
        </div>
    )
}

export default CadastroProduto