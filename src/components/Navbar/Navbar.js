import React, {Component} from "react";
import './Navbar.css';
import {Link} from "react-router-dom"

class Navbar extends Component {
    render() {
        return(
            <nav class="navbar navbar-light bg-warning">
                <div className="Appnavbar">
                   <Link class="navbar-brand" href="/">hello World</Link>
                   <Link class="navbar-brand Sign-In" href="/">Sign In</Link>
                   <Link class="navbar-brand Log-In" href="/">Log In</Link>
                </div>
               
            </nav>
        )
    }
}

export default Navbar