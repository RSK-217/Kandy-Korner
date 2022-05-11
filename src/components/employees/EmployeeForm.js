import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [location, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then((location) => {
                setLocation(location)
            })},
        []
    )

    const [employee, update] = useState({
        name: "",
        locationId: location.id,
        manager: false,
        fullTime: false,
        rate: ""
    });

    const history = useHistory()

    const saveEmployee = (e) => {
        e.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            rate: employee.rate
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch ("http://localhost:8088/Employees", fetchOptions)
        .then(response => response.json())
        .then(() => {
                history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    onChange={
                        (e) => {
                           const copy = {...employee}
                           copy.name = e.target.value
                           update(copy) 
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select
                    onChange={
                        (e) => {
                           const copy = {...employee}
                           copy.locationId = e.target.value
                           update(copy) 
                        }}>
                        <option value="store" selected={true} disabled>Store</option>
                        <option value={location.id}>Kandy Korner East</option>
                        <option value={location.id}>Kandy Korner West</option>
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                        onChange={(e) => {
                            const copy = {...employee}
                            copy.manager = e.target.checked
                            update(copy) 
                         }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox"
                        onChange={(e) => {
                            const copy = {...employee}
                            copy.fullTime = e.target.checked
                            update(copy) 
                         }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rate">Rate:</label>
                    <input
                    onChange={
                        (e) => {
                           const copy = {...employee}
                           copy.rate = e.target.value
                           update(copy) 
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="rate"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}