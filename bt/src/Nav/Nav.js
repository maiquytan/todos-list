import React from "react";
import "./nav.css"
import {NavLink} from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink  activeClassName="active" to="/" exact={true}>Home</NavLink>
                <NavLink  activeClassName="active" to="/login">Login</NavLink>
                <NavLink  activeClassName="active" to="/todo">TodosList</NavLink>   
            </div>
        )
    }
}
export default Nav;