import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard"

const CategoryList = () => {
    
    const [categories, setCategories] = useState([])

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
            // Versão com .then
            
            fetch(`${API_URL}/products/categories`)
            .then(results => results.json())
                .then(data => setCategories(data))
            
    
            // Versão com async/await (mesmo comportamento)
            // const loadProducts = async () => {
            //         const data = await fetch(`${API_URL}/products/category/${category}`)
            //         setProducts(data)  
            // }
            // loadProducts()
        }, []);


    return (
        <>
        <h2>Categorias</h2>
        <div className="category-list">
                {categories.map((categoriaAtual) => (
                    <CategoryCard categoria={categoriaAtual} />
                ))}
        </div>
        </>
    )
}

export default CategoryList