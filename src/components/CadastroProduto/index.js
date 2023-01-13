import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroProduto.css'

const CadastroProduto = () => {
    return (
        <div className='formulario-container container'>
            <Formulario titulo="Adicionar novo produto">
                <CampoInput>Nome do produto</CampoInput>
                <CampoInput type="select">Categoria</CampoInput>
                <CampoInput>Preço do produto</CampoInput>
                <CampoInput type="url" required>URL da imagem</CampoInput>
                <CampoInput type="textarea">Descrição do produto</CampoInput>
                <Botao>Adicionar produto</Botao>
            </Formulario>
        </div>
    )
}

export default CadastroProduto