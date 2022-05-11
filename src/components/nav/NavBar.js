import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
           
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Employees">Employees</Link>
            </li>
        </ul>
    )
}