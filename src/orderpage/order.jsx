import React from "react";
import "../orderpage/order.css"
import Carousel from "./carousel";
import Menu from "./menu";
import Orderform from "./orderform";
export default function Order(){
    return <div className="orderBody">
        <section className="leftSection">
            <Carousel/>
            <Menu/>
        </section>
        <section className="rightSection">
            <Orderform/>
        </section>
    </div>
}