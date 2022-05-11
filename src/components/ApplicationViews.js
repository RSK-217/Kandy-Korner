import React from "react"
import { Route } from "react-router-dom"
import { Locations } from "./locations/Locations"
import { Products } from "./products/Products"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations"><Locations /></Route>

            <Route path="/products"><Products /></Route>

            <Route exact path="/Employees"><EmployeeList /></Route>

            <Route path="/Employees/create"><EmployeeForm /></Route>



        </>
    )
}