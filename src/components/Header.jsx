import { Link } from "react-router"

const Header = ({produtosCarrinho}) => {
    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>
        
            <ul className="nav">
                <li><Link to="/">Início</Link></li>
                <li><Link to="produtos">Produtos</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        
            <div className="header-actions">
                <span className="icon-button">🔍</span>
                <span className="icon-button">❤️</span>
                <span className="icon-button cart">
                    🛒
                    <span className="badge">{produtosCarrinho}</span>
                </span>
            </div>
        </header>
  )
}

export default Header