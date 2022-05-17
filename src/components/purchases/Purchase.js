import React, { useEffect, useState } from 'react'

export const Purchase = () => {
    const [purchase, setPurchase] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/purchases")
                .then(res => res.json())
                .then((res) => {
                    setPurchase(res)
                })
        },
        []
    )

    return (
        <>
            {
                purchase.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>
                            {purchase.name}&nbsp;-
                            ${purchase.price}&nbsp;
                            </p>
                    }
                )
            }
        </>
    )
}
  
