import React, { useEffect, useState} from "react"

export const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_sort=productTypeId&_expand=productType")
            .then(res => res.json())
            .then((product) => {
                setProducts(product)
            })},
        []
    )

    return (
        <>
            {
            products.map(
                (product) => {
                    return <p key={`product--${product.id}`}>
                        {product.name}<br></br> 
                        Category: {product.productType.category}<br></br> 
                        Price: {product.price}</p>
                    })}
        </>
        )
}