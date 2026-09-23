import { Link } from "react-router";

const ProductCard = ({product}) => {
    return (
        <div className="product-card" >
            <img
                src={product.image}
                alt={product.title}
            />
            <p className="product-category">
                {product.category}
            </p>
            <h3>{product.title}</h3>
            <p className="product-rating">
                ⭐⭐⭐⭐⭐ ({product.rating.rate})
            </p>
            <p className="product-price">
                R$ {product.price}
            </p>
            <Link to={`/produtos/${product.id}`}>
                Ver mais
            </Link>
            <button className="btn-secondary">
                Adicionar ao carrinho
            </button>
        </div >
    )
       
}


export default ProductCard