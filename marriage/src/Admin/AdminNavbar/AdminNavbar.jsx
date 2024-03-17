import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

export default function AdminNavbar() {
    return (
        <nav className="navbar dashboard-nav">
            <div className="navbar-container">
                <Link to="/AdminDashboard" className="navbar-logo">
                    ForeverTie
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/managevenues" className="nav-links">
                            Venues
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/managedecors" className="nav-links">
                            Decorers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/managecaterers" className="nav-links">
                            Caterers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-links">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
