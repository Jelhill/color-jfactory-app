import React from 'react'

export default function Form({colorList, getUserSelectedColor, getUserInput, updateUserEntries}){  

    return (
        <div className="form-container">
            <form className="form-wrapper">
                <div>
                    <label htmlFor="">Enter a Color</label>
                    <input type="text" onChange={getUserInput}/>
                </div>
                <div>
                    <label htmlFor="">Select Color</label>
                    <input type="color" onChange={getUserSelectedColor}/>
                </div>
                <div>
                    <button onClick={updateUserEntries}>Add Color</button>
                </div>
            </form>                
        </div>            
    )
}
