import React from "react";
import "../orderpage/order.css"
import Carousel from "./carousel";
import Menu from "./menu";
import Orderform from "./orderform";
import Navbar from './../components/navbar';
import Footer from './../components/footer';
export default function Order(){
    return <div className="orderBody">
        <Navbar/>
        <div className="orderSection">
        <section className="leftSection">
            <Carousel/>
            <Menu/>
        </section>
        <section className="rightSection">
            <Orderform/>
        </section>
        </div>
        <Footer/>
    </div>
}