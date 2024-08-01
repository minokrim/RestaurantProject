import React from "react"
import "../signin/signin.css"
import foodimg from "../img/signinfoodimg.png";
import logo from "../img/tm30biglogo.png"
import envelope from "../img/envelopee.png"
import padlock from "../img/padlock_4167808 1.png"
import { Link } from "react-router-dom";
function Homesignin(){
    return <div>
        <div className="signinMain">
            <section className="blueSection">
            <img src={logo} alt="" className="logoimg"/>
                <img src={foodimg} alt="" className="foodimg"/>
                <p className="blueTxt1"><span>Order your</span> favourite Lunch</p>
                <p className="blueTxt2">&</p>
                <p className="blueTxt3">Enjoy other <span>Services</span></p>
            </section>
            <section className="whiteSection">
                <div>
                    <img src={logo} alt="" className="whiteLogo"/>
                    <p className="whitetext1 txt">Welcome Back</p>
                    <p className="whitetext2 txt">Sign in with your email address and password</p>
                    <form action="/submit" method="post" className="loginsection">
                    <div className="inputsec">
                        <p className="whitetext3">Email Address</p>
                        <div className="inputFields">
                            <img src={envelope} alt="" className="icon"/>
                            <input type="text" placeholder="Enter your email address" name="email"/>
                        </div>
                        <div className="inputsec">
                        <p className="whitetext3">Password</p>
                        <div className="inputFields">
                            <img src={padlock} alt="" className="icon env"/>
                            <input type="text" placeholder="Enter your password" name="password"/>
                        </div>   
                    </div>
                    </div>
                    </form>
                    <section className="forgetPass">
                        <div className="forgetpassright">
                            <input type="checkbox" name="" id="" />
                            <p>Remeber me</p>
                        </div>
                        <p>Forgot Passsword?</p>
                    </section>
                    <button className="signupBtn">Login</button>
                    <div className="registerSec">
                        <p className="whitetext7">Don't have an account?</p>
                        <Link to="/register" className="linkk">
                        <p className="whitetext8" >Register</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
}
export default Homesignin