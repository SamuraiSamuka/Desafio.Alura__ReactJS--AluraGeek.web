import './Erro404.css'
import imagemPng from './404Error.gif'

export default function Erro404() {
  return (
    <div className='container erro404-container'>
        <img src={imagemPng} alt="" className='erro404-imagem'/>
        <h1 className='erro404-mensagem'>Página não encontrada</h1>
        <a className='erro404-attibution' href="https://storyset.com/web">Web illustrations by Storyset</a>
    </div>
  )
}
