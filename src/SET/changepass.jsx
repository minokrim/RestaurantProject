import React from "react";
import Navbar from './../components/navbar';
import "./changepass.css"
import Footer from "../components/footer";
import key from "../img/key.png"
import reset from "../img/refresh.png"
export default function ChangePass(){
    return <div className="changepBody">
        <Navbar/>
        <div className="changepSections">
        <section className="changepSec1">
            <div className="sec1Title">
                <h5>Change Password</h5>
                <p>Here you can change your password</p>
                <hr />
            </div>
            <section>
                <div className="sec1pass">
                    <h4>Current Password</h4>
                    <input type="password" placeholder="Just to confirm its you"/>
                </div>

                <div className="sec1pass">
                    <h4>New Password</h4>
                    <input type="password" placeholder="Enter new password"/>
                </div>

                <div className="sec1pass">
                    <h4>Confirm Password</h4>
                    <input type="text" placeholder="Confirm new password"/>
                </div>
            </section>
            <div className="changePassButtonHolder">
            <button className="changePassButton"><img src={reset} alt="" id="reset"/> Change Password</button>
            </div>
        </section>
        <section className="changepSec2">
            <img src={key} alt="" />
        </section>
        </div>
        <Footer/>
    </div>
}