import React from "react"
import "../components/footer.css"
import fb from "../img/Facebook.png"
import ig from "../img/Instagram.png"
import x from "../img/Twitter.png"
function Footer(){
    return <div>
        <div className="footerbody">
            <div className="row1">
                <h2>Places</h2>
                <p className="item1">Lagos</p>
                <p>Abuja</p>
                <p>Ibadan</p>
                <p>Lekki-Lagos</p>
                <p>Island-Lagos</p>
                <p>Mainland-Lagos</p>
                <p>Yaba-Lagos</p>
                <p>Victoria island-Lagos</p>
                <p>Ikoyi - Lagos</p>
            </div>
            <div className="row1">
                <h2>Culinary Art</h2>
                <p className="item1">Nigerian Food</p>
                <p>Pasta</p>
                <p>African FOOD</p>
                <p>Sandwiches</p>
                <p>Pizza</p>
                <p>Breakfast</p>
                <p>Traditional</p>
            </div>
            <div className="row1">
                <h2>Popular Vendor</h2>
                <p className="item1">Mama j Bukka</p>
                <p>Choice Meal</p>
                <p>Kobe Delicious</p>
                <p>Gidi Grills</p>
                <p>Item 7 Meal</p>
                <p>Iya Skye BUkka Hut</p>
            </div>
            <div className="row1">
                <h2>Collaboration</h2>
                <p className="item1">Sell on Tm30 Foood Platform</p>
                <p>Order for your Company Staff</p>
            </div>
            <div className="row1">
                <h2>TM30 Food Platform</h2>
                <p className="item1">About</p>
                <p>Help page</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>

                <h2 className="item1">Connect with us</h2>
                <div className="social item1">
                    <img src={ig} alt="" />
                    <p>Instagram</p>
                </div>
                <div className="social">
                    <img src={x} alt="" />
                    <p>twitter</p>
                </div>
                <div className="social">
                    <img src={fb} alt="" />
                    <p>Fcaebook</p>
                </div>
            </div>
        </div>
        <div className="footerFooter">
            <p>&copy; 2023 TM30 Food Platform All rights reserved</p>
        </div>
    </div>
}
export default Footer