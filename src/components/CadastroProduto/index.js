import { useState } from 'react'
import Botao from '../Botao'
import CampoInput from '../CampoInput'
import Formulario from '../Formulario'
import './CadastroProduto.css'

const CadastroProduto = () => {

    const [produto, setProduto] = useState({})

    function aplicaPattern(evento){
        const campo = evento.target
        const valor = campo.value
        const valorLimpo = valor.replace(/\D+/, "").replace(/[,]/, "").replace(/\s/,"")
        let valorTamanhoAdequado = valorLimpo
        // if(valorLimpo.length === 1){
        //     valorTamanhoAdequado = "0".concat(valorLimpo)
        // } 
        const valorFormatado = valorTamanhoAdequado.replace(/(0*)(\d*)(\d{2}$)/,"R$ $2,$3")
        campo.value = valorFormatado
    }

    function aoSalvar(evento){
        evento.preventDefault()
        const formulario = evento.target
        const campoNome = formulario.querySelector('#produtoNome')
        const campoCategoria = formulario.querySelector('#produtoCategoria')
        const campoPreco = formulario.querySelector('#produtoPreco')
        const campoImagem = formulario.querySelector('#produtoImagem')
        const campoDescricao = formulario.querySelector('#produtoDescricao')

        console.log(campoCategoria)
        setProduto({nome: campoNome.value, categoria: campoCategoria.value, preco: campoPreco.value, imagem_src: campoImagem.value, descricao: campoDescricao.value})
        console.log(produto)
    }

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Adicionar novo produto" onsubmit={aoSalvar}>
                <CampoInput id="produtoNome" minimo="5" maximo="50" required>Nome do produto</CampoInput>
                <CampoInput id="produtoCategoria" type="select" opcoesLista={["Star Wars", "Consoles", "Roupas", "Diversos"]} addOpcao="true" required>Categoria</CampoInput>
                <CampoInput id="produtoPreco" onChange={evento => aplicaPattern(evento)} required>Preço do produto</CampoInput>
                <CampoInput id="produtoImagem" type="url" required>URL da imagem</CampoInput>
                <CampoInput id="produtoDescricao" type="textarea" minimo={5} maximo={400} required>Descrição do produto</CampoInput>
                <Botao type="submit">Adicionar produto</Botao>
            </Formulario>
        </div>
    )
}

export default CadastroProduto