import React from "react";
import "../components/navbar.css"
import logo from "../img/logoo.png"
import bell from "../img/bell.png"
import menu from "../img/menu.png"
import bars from "../components/menu.png"
import { Link } from "react-router-dom";
function Navbar (){
    return <div className="navbarmain">
        <section>
            <div className="dropdown">
                <div className="dropdownContent">
                </div>
                <img src={bars} alt="" />
            </div>
        </section>

        <section className="firstSec">
            <img src={logo} alt="" />
            <input type="text" name="" id="VendorSearch" placeholder="Search for Vendor"/>
        </section>
        <section className="secondSec">
            <img src={bell} alt="" />
            <img src={menu} alt="" />
            <Link to="/signin" className="linkk">
            <p>Login/Signup</p>
            </Link>
        </section>
    </div>
}
export default Navbar