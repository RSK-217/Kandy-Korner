import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )
    
    const Terminate = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(setEmployees(employees => employees.filter(employee => employee.id !== id)))
    }

    return (
        <>

            <button onClick={() => history.push("/Employees/create")}>Hire Employee</button>


            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>
                            {employee.name}<br></br>
                            {employee.location?.location}
                            <button onClick={() => {
                                Terminate(employee.id)
                            }}>Terminate</button></p>
                    }
                )
            }
        </>
    )
}