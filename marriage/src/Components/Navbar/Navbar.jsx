import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <nav className="navbar dashboard-nav">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        ForeverTie
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Venue
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Decor
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Caterer
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                            Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}