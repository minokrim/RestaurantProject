import React, { useEffect, useState } from "react";
import "../orderpage/orderform.css"
import formicon from "../img/formicon.png"
import Item from "./item";
export default function Orderform(){
    const[items,setitems]=useState([])
    
    useEffect(()=>{
        var storedItems=JSON.parse(localStorage.getItem("items"))
        setitems(storedItems)
    },[items])

    return <div className="formMain">
        <div className="formBorder">
        <section className="formTitle">
            <p>Order From</p>
            <h3>Mama J Bukka</h3>
        </section>

        {items.length>0?
        <section>
        {items.map((item)=>(
        <div key={item.name} className="itemmain">
            <section className="itemTop">
            <h2>{item.quantity}1X</h2>
            <img src={item.image} alt="" />
            <h4>{item.name}</h4>
            <div>
            <h3>${item.price}.00</h3>
            <p>Edit</p>
            </div>
        </section>

        <section className="itemBottom">
            <p>-</p>
            <p>+</p>
        </section>
        </div>
        ))}
    </section>:
        <section className="formBody">
        <img src={formicon} alt="" />
        <h4>No Item Yet</h4>
        <h5>Looks Like You Havent Made Your Order Yet</h5>
    </section>
        }

        <section className="btnsection">
        <button>SUBMIT ORDER</button>
        </section>
        </div>
        {/* <Item/> */}
    </div>
}