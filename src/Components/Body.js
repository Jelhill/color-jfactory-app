import React from 'react'
import { Link } from "react-router-dom"

export default function Body({colorList}) {
    return (
        <div className="body">
            <div>
                <h2>Please Select a Color</h2>
            </div>
            {colorList.map((color, index) => 
                <p key={index}><Link to={`/displayColor/${color.colorName}/${color.colorHex.substring(1).toUpperCase()}`}>{color.colorName}</Link></p>)}      
        </div>
    )   
}
