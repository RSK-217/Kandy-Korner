import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then((custArray) => {
                setCustomer(custArray)
            })},
        []
    )


    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>
                            {customer.name}&nbsp;:&nbsp;
                            {customer.phone}&nbsp;/&nbsp;
                            {customer.email}</p>
                    }
                )
            }
        </>
    )
}