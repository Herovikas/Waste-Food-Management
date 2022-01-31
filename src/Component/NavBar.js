import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <header className="header boxs">
      <div className="container">
        <nav className="navbar myNavBar navbar-expand-sm">
         <Link to="/"> <img src={'./logo.png'} className="img-fluid first_logo" alt="Logo" />   </Link>
        <div className="collapse navbar_right navbar-collapse" id="collapsibleNavbar">
                <div className="navbar navbar-right">
                    <ul className="navbar-nav menu">
                        <li className="nav-item">
                            <Link className="nav-link section1" to="/Donate">Donate</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link section1" to="/LOGIN">LOGIN</Link>
                        </li>
                      
                    </ul>

                </div>

            </div>
        </nav>
      </div>
    </header>
  </>
  );
}
