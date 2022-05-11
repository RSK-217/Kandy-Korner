import React from "react"
import { Route } from "react-router-dom"
import { Locations } from "./Locations/Locations"
import { Products } from "./Products/Products"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/Locations"><Locations /></Route>

            <Route path="/Products"><Products /></Route>

        </>
    )
}