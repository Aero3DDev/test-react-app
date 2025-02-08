import './App.css';
import { NavLink } from "react-router-dom"

const Navbar =()=>{
    return (
        <div className="App-navbar">
            {/* From v6 onwards of react-router replace activeClassName with className and use .isActive to toggle style.
                <NavLink exact activeClassName="active" className="navbar-link" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" className="navbar-link" to="/about">About</NavLink>
                <NavLink exact activeClassName="active" className="navbar-link" to="/careers">Careers</NavLink>
            */}
            <NavLink className={({ isActive }) => isActive? "navbar-link active": 'navbar-link'} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive? "navbar-link active": 'navbar-link'} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive? "navbar-link active": 'navbar-link'} to="/careers">Careers</NavLink>
        </div>
    )
}
export default Navbar;