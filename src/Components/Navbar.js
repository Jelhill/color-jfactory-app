import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"
import Body from "./Body"


class Navbar extends Component {
    
    render() {
        return (
            <div>
                <div className="navbar-wrapper">
                    <h2>Welcome to the color Factory</h2>
                    <Link to={"/form"}>
                        <h1>Add a Color</h1>
                    </Link>
                </div>
                <Body colorList={this.props.colorList}/>
            </div>
        )
    }
}



export default Navbar