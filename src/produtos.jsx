import localforage from "localforage";
import dados from 'db.json'
import { v4 as uuidv4 } from 'uuid';

const produtosIniciais = dados.produtos.map(produto => {
    let produtoConvertido = {
      id: uuidv4(),
      nome: produto.nome,
      imagem_src: produto.imagem_src,
      categoria: produto.categoria,
      descricao: produto.descricao,
      preco: parseFloat(produto.preco),
      data_criacao: new Date()
    }
    return produtoConvertido
})

salvar(produtosIniciais)

export async function createProduto(dados) {
    produto = { 
        id: uuidv4(), 
        ...dados, 
        data_criacao: new Date() }
    let produtos = getProdutos();

}

export async function getProduto(id) {
    let produtos = await localforage.getItem("produtos");
    let produto = produtos.find(produto => produto.id === id);
    return produto ?? null
}

export async function updateProduto(id, updates) {
    let produtos = await localforage.getItem("produtos");
    let produto = produtos.find(produto => produto.id === id);
    if (!produto) throw new Error("Nenhum produto encontrado com o id ", id);
    Object.assign(produto, updates);
    await salvar(produtos)
}

function salvar(produtos) {
    return localforage.setItem("produtos", produtos)
}