<>
<Banner />
<ProdutoDetalhado
    nome={produtos[0].nome}
    preco={produtos[0].preco}
    descricao={produtos[0].descricao}
    imagem_src={produtos[0].imagem_src}
    key={produtos[0].id}></ProdutoDetalhado>
<SecaoProduto categoria={'star_wars'} produtos={produtos.filter(produto=>produto.categoria==="star_wars")}>Star Wars</SecaoProduto>
<SecaoProduto categoria={'consoles'} produtos={produtos.filter(produto=>produto.categoria==="consoles")}>Consoles</SecaoProduto>
<SecaoProduto categoria={'roupas'} produtos={produtos.filter(produto=>produto.categoria==="roupas")}>Roupas</SecaoProduto>
</>