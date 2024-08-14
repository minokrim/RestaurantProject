import React, { useState }  from "react";
import "../register/register.css"
import foodimg from "../img/signinfoodimg.png"
import logo from "../img/logoimg.png"
import envelope from "../img/envelopee.png"
import call from "../img/call.png"
import padlock from "../img/padlock_4167808 1.png"
import { Link } from "react-router-dom";
import axios from "axios"
function Register(){
    const [email,setemail]=useState("");
    const [number,setnumber]=useState("");
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [password,setpassword]=useState("");
    const [verifypass,setverifypass]=useState("");

    function createUser(){
        var newuserdetails={
            email:email,
            number:number,
            firstname:firstname,
            lastname:lastname,
            password:password,
            verifypass:verifypass
        }
        if (password!==verifypass){
            alert("wrong pass")
        }
        else{
            axios.post("http://localhost:4000/node/react",newuserdetails)
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        
    }


    return <div>
        <div className="signinMain">
            <section className="blueSectionregister">
                <img src={logo} alt="" className="blueLogo"/>
                <img src={foodimg} alt="" className="foodimg"/>
                <p className="blueTxt1"><span>Order your</span> favourite Lunch</p>
                <p className="blueTxt2">&</p>
                <p className="blueTxt3">Enjoy other <span>Services</span></p>
            </section>
            <section className="whiteSection2">
                <div>
                    <div className="whiteLogoContainer">
                    <img src={logo} alt="" className="whiteLogo"/>
                    </div>
                    <p className="whitetext2 txt">Please fill in your details to get started</p>
                    <form className="registerform" action="/submit" method="post">
                        
                    <div className="inputsec inputsec2">
                        <p className="whitetext3">Email Address</p>
                        <div className="inputFields">
                            <img src={envelope} alt="" className="icon"/>
                            <input type="text" name="email" value={email} onChange={((e)=>{setemail(e.target.value)})} placeholder="Enter your email address"/>
                        </div>
                    </div>
                    <div className="inputsec inputsec2">
                        <p className="whitetext3">Phone Number</p>
                        <div className="inputFields">
                            <img src={call} alt="" className="icon padlock"/>
                            <input type="text" name="number" value={number} onChange={((e)=>{setnumber(e.target.value)})} placeholder="Enter your number"/>
                        </div>
                    </div>
                    <div className="inputsec inputsec2">
                        <p className="whitetext3">First Name</p>
                        <div className="inputFields">
                            <img src={envelope} alt="" className="icon"/>
                            <input type="text" name="firstname" value={firstname} onChange={((e)=>{setfirstname(e.target.value)})} placeholder="Enter your first name"/>
                        </div>
                    </div>
                    <div className="inputsec inputsec2">
                        <p className="whitetext3">Last Name</p>
                        <div className="inputFields">
                            <img src={envelope} alt="" className="icon"/>
                            <input type="text" name="lastname" value={lastname} onChange={((e)=>{setlastname(e.target.value)})} placeholder="Enter your last name"/>
                        </div>
                    </div>
                    <div className="inputsec inputsec2">
                        <p className="whitetext3">New Password</p>
                        <div className="inputFields">
                            <img src={padlock} alt="" className="icon padlock"/>
                            <input type="password" name="password" value={password} onChange={((e)=>{setpassword(e.target.value)})} placeholder="New Password"/>
                        </div>
                    </div>
                    <div className="inputsec inputsec2">
                        <p className="whitetext3">Confirm New Password</p>
                        <div className="inputFields">
                            <img src={padlock} alt="" className="icon padlock"/>
                            <input type="password" name="verifypassword" value={verifypass} onChange={((e)=>{setverifypass(e.target.value)})} placeholder="Confirm New Password"/>
                        </div>
                    </div>

                    </form>
                    <button className="signupBtn2" onClick={createUser}>Register</button>
                    
                    <div className="registerSec">
                        <p className="whitetext7">Already have an account?</p>
                        <Link to="/signin" className="linkk">
                        <p className="whitetext8">Login</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
}
export default Register