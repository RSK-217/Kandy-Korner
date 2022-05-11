import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/Employees")
            .then(res => res.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })},
        []
    )


    return (
        <>
           
            <button onClick={() => history.push("/Employees/create")}>Hire Employee</button>
            
    
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>
                            {employee.name}<br></br>
                            {employee.locationId}</p>
                    }
                )
            }
        </>
    )
}