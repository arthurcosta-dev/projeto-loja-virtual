import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";



const ProductsPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("electronics")

    useEffect(() => {
        // Versão com .then
        
        fetch(`${API_URL}/products/category/${category}`)
        .then(results => results.json())
        .then (data => setProducts(data))
        

        // Versão com async/await (mesmo comportamento)
        // const loadProducts = async () => {
        //         const data = await fetch(`${API_URL}/products/category/${category}`)
        //         setProducts(data)  
        // }
        // loadProducts()
    }, [category]);

    return (
        <>
        <Header/>
            <h1>Todos os produtos</h1>
            <button onClick={() => setCategory("electronics")}>Eletronicos</button>
            <button onClick={() => setCategory("jewelery")}>Joias</button>
            <ProductList products = {products}/>
        </>
        

    )
}

export default ProductsPage