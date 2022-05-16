import React, { useEffect, useState } from "react"


export const Products = () => {
    const [product, setProducts] = useState([])
    const [purchase, update] = useState(
       {
        name: "",
        price: "",
        productId: 1,
        customerId: 1
        }
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_sort=productTypeId&_expand=productType")
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
            },
        [])
    

        const Cart = (e) => {
            e.preventDefault()
            const newEmployee = {
                name: purchase.name,
                price: purchase.price,
                productId: purchase.productId,
                customerId: purchase.customerId
            }
    
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            }
    
             fetch ("http://localhost:8088/purchases", fetchOptions)
            .then(res => res.json())
            .then((res) => {
                update(res)
            })
        }

    return (
        <>
            {
            product.map(
                (product) => {
                    return <p key={`product--${product.id}`}>
                        {product.name}<br></br> 
                        Category: {product.productType.category}<br></br> 
                        Price: {product.price}&nbsp;
                        <button onClick={Cart} key={`product--${product.id}`} value={product.id}>Purchase</button></p>
                        
                    })}
        </>
        )
}