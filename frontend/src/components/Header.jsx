import React from "react";
import "../styles/Header.css"; // Add your styling here

function Header() {
    return (
        <header className="header-container">
            <h1>Masibekela High School</h1>
            <nav>
                <ul className="header-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/logout">Log Out</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;