import React from "react"
import "../Homepage/homebody.css"
import food from "../img/foodl1.jpg"
import fd1 from "../img/img1.png"
import fd2 from "../img/img2.png"
import fd3 from "../img/img3.png"
import fd4 from "../img/img4.png"
import Star from "../img/Star.png"
import divider from "../img/img5.png"
import handshake from "../img/handshake.png"
import opt1 from "../img/opt1.png"
import opt2 from "../img/opt2.png"
function HomeBody(){
    return <div>
        <div className="bodyMain">
            <div className="sect-1"> 
            <section className="description">
                <div className="des1">
                    <div id="l1"></div>  
                    <p>Welcome to TM30 Food Platform</p>
                    <div id="l2"></div>
                </div>
                <div className="des2">
                    <div id="l3"></div>
                    <div className="subdes">
                        <p className="sub1-des1">Tasty Meal</p>
                        <p className="sub1-des2">Anytime.</p>
                    </div>
                </div>
                <div className="des3">
                    <div id="l4"></div>
                    <p>Delicious food is waiting for you</p>
                </div>
            </section>
            <section className="foodImage">
                <img src={food} alt="" />
            </section>
            </div>


            <div className="sect-2">
                <div className="vendorSelection">
                    <p className="vs1">Top Vendors</p>
                    <p className="vs2">Other Vendors</p>
                </div>
                <div className="vendorImages">
                    <div className="img-container">
                        <img src={fd1} alt="" />
                        <p>Mama J Bukka</p>
                        <div className="fd-details">
                            <img src={Star} alt="" />
                            <p className="det1">4.9</p>
                            <p className="det2">(500+)</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={fd2} alt="" />
                        <p>Choice Meal</p>
                        <div className="fd-details">
                            <img src={Star} alt="" />
                            <p className="det1">4.7</p>
                            <p className="det2">(500+)</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={fd3} alt="" />
                        <p>Kobe Delicious</p>
                        <div className="fd-details">
                            <img src={Star} alt="" />
                            <p className="det1">4.9</p>
                            <p className="det2">(374)</p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={fd4} alt="" />
                        <p>Gidi Grills</p>
                        <div className="fd-details">
                            <img src={Star} alt="" />
                            <p className="det1">4.9</p>
                            <p className="det2">(404)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider-img">
                    <img src={divider} alt="" />
                </div>
                <div className="sec3">
                    <div className="handshake">
                    <img src={handshake} alt="" />
                    <p>Lets's Collaborate</p>
                    </div>
                    <div className="optContainer">
                        <div className="becomeVend">
                            <img src={opt2} alt="" />
                            <p id="det1" className="det">Become a Vendor</p>
                            <p id="det2" className="det">expand your food sales and get more customers</p>
                            <h4>Sign up</h4>
                        </div>
                        <div className="becomeVend">
                        <img src={opt1} alt="" />
                            <p id="det1" className="det">Register your Company</p>
                            <p id="det2" className="det">The easy way to enjoy food odering for your staffs</p>
                            <h4>Sign up</h4>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}
export default HomeBody