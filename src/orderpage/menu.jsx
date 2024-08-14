import React, { useState,useEffect } from "react";
import Foodcard from "./foodcard";
import Breakfast from './../placeholders/breakfast';
import "../orderpage/menu.css"
import Rice from './../placeholders/rice';
import Pasta from './../placeholders/pasta';
import Swallows from './../placeholders/swallows';
import Others from './../placeholders/others';
export default function Menu(){
    const[breakfast,setbreakfast]=useState(false)
    const [rice,setRice]=useState(false)
    const [pasta,setPasta]=useState(false)
    const [swallow,setSwallow]=useState(false)
    const [other,setOther]=useState(false)

    const[items,setitems]=useState([])

    function showrice(){
        setRice(true)
        setPasta(false)
        setSwallow(false)
        setOther(false)
        setbreakfast(false)
    }
    function showpasta(){
        setPasta(true)
        setRice(false)
        setOther(false)
        setSwallow(false)
        setbreakfast(false)
    }
    function showswallow(){
        setSwallow(true)
        setPasta(false)
        setRice(false)
        setOther(false)
        setbreakfast(false)
    }
    function showother(){
        setRice(false)
        setPasta(false)
        setSwallow(false)
        setOther(true)
        setbreakfast(false)
    }
    function showbreakfast(){
        setbreakfast(true)
        setRice(false)
        setPasta(false)
        setSwallow(false)
        setOther(false)
        
    }
    function showfood(food){
        return <Foodcard
        key={food.id}
        name={food.name}
        image={food.image}
        price={food.price}
        addtorder={addtorder}
        />
    }

    
    useEffect(()=>{
        var storedItems=JSON.parse(localStorage.getItem("items"))||[]
        setitems(storedItems);
    },[])
    const addtorder=(newItems)=>{
        setitems(prevItems => {
            const itemExists = prevItems.some(item =>
                item.name === newItems.name &&
                item.price === newItems.price &&
                item.image === newItems.image
            );
            if (itemExists) {
                return prevItems; 
            } else {
                const updatedItems = [...prevItems, newItems];
                localStorage.setItem('items', JSON.stringify(updatedItems));
                return updatedItems;
            }
        });
    }
    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(items))
    },[items])

    return <div className="menuboard">
        <section className="menuOptions">
            <p onClick={showbreakfast} id="breakfast">BREAKFAST</p>
            <p onClick={showrice} id="rice">RICE</p>
            <p onClick={showpasta}id="pasta">PASTA</p>
            <p onClick={showswallow} id="swallow">SWALLOWS</p>
            <p onClick={showother} id="other">OTHERS</p>
        </section>
        <hr />

        <section className="foodItems">
            {rice?Rice.map(showfood):pasta?Pasta.map(showfood):swallow?Swallows.map(showfood):other?Others.map(showfood):Breakfast.map(showfood)}
        </section>
    </div>
}