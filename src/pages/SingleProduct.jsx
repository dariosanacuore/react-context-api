import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleProduct() {
    const { id } = useParams();
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                setProducts(resp.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Prodotto non esiste");
                if (err.response && err.status === 404) {
                    navigate("/prodotti");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);


    return (
        <>
            {loading === true && "Loading..."}
            {products && (
                <div>
                    <img src={products.image} width="300" height="300" />
                    <h1>{products.title}</h1>
                    <p>Prezzo: {products.price}</p>
                    <p>Descrizione: {products.description}</p>
                </div>
            )}
        </>
    );


}