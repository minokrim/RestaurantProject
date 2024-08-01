import React from "react";
import "../orderpage/foodcard.css"
export default function Foodcard(props){

    const { name, price, image, addtorder } = props ;

    function handleAddToOrder() {
        const newItem = { name, price, image };
        addtorder(newItem);
    }

    return <div>
        <section className="foodcard">
            <img src={props.image} alt="" />
            <div>
                <h3>{props.name}</h3>
                <h4>${props.price}.00</h4>
            </div>
            <p className="add" onClick={handleAddToOrder}>+</p>
        </section>
    </div>
}