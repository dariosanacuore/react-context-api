import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";
export default function Products() {
    const { budgetMode } = useContext(BudgetContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            console.log(resp.data);
            setProducts(resp.data);
        });
    }, []);
    const filteredProducts = budgetMode
        ? products.filter(p => p.price <= 30)
        : products;


    return (
        <section>
            <h2>I prodotti sono:</h2>
            {filteredProducts.map((product) => (
                <li key={product.id}>
                    <Link to={`/prodotti/${product.id}`}>
                        <ul className='list-group'>
                            <li><img src={product.image} width="300" height="300" /></li>
                            <li className='list-group-item'>{product.title}</li>
                            <li className='list-group-item'>{product.price}</li>
                            <li className='list-group-item'>{product.description}</li>
                            <li className='list-group-item'>{product.category}</li>
                        </ul>
                    </Link>
                </li>
            ))}

        </section>
    );
}