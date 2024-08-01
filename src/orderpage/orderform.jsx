import React from "react";
import "../orderpage/orderform.css"
import formicon from "../img/formicon.png"
import Item from "./item";
export default function Orderform(){
    return <div className="formMain">
        <div className="formBorder">
        <section className="formTitle">
            <p>Order From</p>
            <h3>Mama J Bukka</h3>
        </section>
        <section className="formBody">
            <img src={formicon} alt="" />
            <h4>No Item Yet</h4>
            <h5>Looks Like You Havent Made Your Order Yet</h5>
        </section>
        <section className="btnsection">
        <button>SUBMIT ORDER</button>
        </section>
        </div>
        <Item/>
    </div>
}