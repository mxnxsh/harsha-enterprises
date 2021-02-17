import React from "react";

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#1F4DA1"}}>
            <div className="container">
            <a className="navbar-brand" href="#" style={{color: "white"}}><img src="./images/6737cdb916.png" height="38px" alt="hersha enterprises logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link nav_urls" href="/" style={{color: "white"}}>Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link nav_urls" href="/service" style={{color: "white"}}>Service</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link nav_urls" href="/about" style={{color: "white"}}>About Us</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link nav_urls" href="/contact" style={{color: "white"}}>Contact Us</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Header;