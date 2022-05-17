import React from "react"
import { Route } from "react-router-dom"
import { Locations } from "./locations/Locations"
import { Products } from "./products/Products"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { CustomerList } from "./customers/CustomerList"
import { Purchase } from "./purchases/Purchase"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/Locations"><Locations /></Route>

            <Route path="/Products"><Products /></Route>

            <Route exact path="/Employees"><EmployeeList /></Route>

            <Route path="/Employees/create"><EmployeeForm /></Route>

            <Route path="/Customers"><CustomerList /></Route>

            <Route path="/MyOrders"><Purchase /></Route>



        </>
    )
}