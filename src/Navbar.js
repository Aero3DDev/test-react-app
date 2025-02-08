import './App.css';
import { Link } from "react-router-dom"

const Navbar =()=>{
      return (
            <div className="App-navbar">
                  <Link className="App-link" to="/">Home</Link>
                  <Link className="App-link" to="/about">About</Link>
                  <Link className="App-link" to="/careers">Careers</Link>
            </div>
      )
}
export default Navbar;