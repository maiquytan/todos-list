import React from "react";
import "./nav.css"
import {NavLink} from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink  className="active" to="/" >Home</NavLink>
                <NavLink  className="active" to="/login">Login</NavLink>
                <NavLink  className="active" to="/todo">TodosList</NavLink>   
            </div>
        )
    }
}
export default Nav;