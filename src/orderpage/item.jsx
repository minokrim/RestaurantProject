import React from "react";
import "../orderpage/item.css"
export default function Item(props){
    return <div className="itemmain">
        <section className="itemTop">
            <h2>{props.quantity}1X</h2>
            <img src={props.image} alt="" />
            <h4>{props.details}rmp</h4>
            <div>
            <h3>${props.price}.00</h3>
            <p>Edit</p>
            </div>
        </section>
        
        <section className="itemBottom">
            <p>-</p>
            <p>+</p>
        </section>
    </div>
}