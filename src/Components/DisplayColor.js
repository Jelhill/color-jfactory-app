import React from 'react'
import { Link, useParams } from "react-router-dom"

export default function DisplayColor({colorList}) {
    
    const { color } = useParams()
    console.log(color)
    return (
        <div className="colorDisplay" style={{background: `#${color}`}}>
            <h1>This is Hex Color {`#${color}`}</h1>
            <Link to={"/"}><h1>Go Back</h1></Link>
        </div>
    )
}
