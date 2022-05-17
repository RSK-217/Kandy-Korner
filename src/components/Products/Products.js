import React, { useEffect, useState } from "react"


export const Products = () => {
    const [product, setProduct] = useState([])

    const [purchase, setPurchase] = useState(
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
                    setProduct(res)
                })
        },
        [])


    const purchaseItem = (item) => {
        const purchaseObj = {
            name: item.name,
            price: item.price,
            productId: item.id,
            customerId: parseInt(localStorage.getItem("kandy_customer"))
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchaseObj)
        }
        fetch("http://localhost:8088/purchases", fetchOptions)
            .then(res => res.json())
            .then((res) => {
                setPurchase(res)

            }
            )
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
                            <button onClick={() => purchaseItem(product)} key={`product--${product.id}`} value={product.id}>Purchase</button></p>

                    })}
        </>
    )
}

 // const [cart, updateCart] = useState([]) //creates cart state of all products in a purchase
 // const addToCart = (productId) => {
            // updateCart(cart.concat(productId))}