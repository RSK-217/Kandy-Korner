import React, { useEffect, useState } from "react"

export const Locations = () => {
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locale) => {
                    setLocation(locale)
                }
                )
        },
        []
    )

    return (
        <>
            {locations.map(
                (location) => {
                    return <p key={`location--${location.id}`}>
                        {location.location}<br></br>
                        {location.address}</p>
                }
            )
            }
        </>
    )
}