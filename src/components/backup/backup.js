<>
<div className="App">
    <LandingPage produtos={produtos}/>
    <PaginaProduto produtos={produtos}/>
    <PaginaCadastroProduto salvaProduto={salvaProduto} produtos={produtos} categorias={categorias}/>
    <PaginaLogin produtos={produtos} aoLogar={logar}/>
    <PaginaCadastroUsuario produtos={produtos} aoUsuarioCadastrado={salvaUsuario} verificaEmail={validaEmail}/>
    <PaginaErro404 produtos={produtos}/>
    <PaginaRecuperarSenha produtos={produtos}/>
</div>
</>
