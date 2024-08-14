import React,{useEffect} from "react";
import "../orderpage/carousel.css"
import carosel1 from "../img/carousel1.png"
import carosel2 from "../img/carousel2.png"
import carosel3 from "../img/carousel3.png"
import bukkabanner from "../img/banner.png"
import Foodcard from "./foodcard";
function Carousel(){
    useEffect(() => {
        carousel();
      }, []);

      var slider=0;
    function carousel(){
        var img1=document.getElementById("carimg1")
        var img2=document.getElementById("carimg2")
        var img3=document.getElementById("carimg3")
        var images=[img1,img2,img3]
        for(var i=0;i<images.length;i++){
            images[i].style.display="none"
        }

        slider++
        if(slider>images.length){
            slider=1
        }
        images[slider-1].style.display="block"
        setTimeout(carousel,1000)
    }
    return <div className="carouselbody">
        <div className="carousel">
            <div className="div1">
            <img src={carosel1} alt="" id="carimg1" className=" car"/>
            </div>
            <div className="div1">
            <img src={carosel2}  alt="" id="carimg2" className=" car"/>
            </div>
            <div className="div1">
            <img src={carosel3}  alt="" id="carimg3" className="car"/>
            </div>
        </div>
        <section className="bukkaBannerSection">
            <img src={bukkabanner} alt="" className="bukkaBanner"/>
        </section>
        <section>
            <input type="search" name="" id="" placeholder="SEARCH IN MAMA J BUKKA" className="searchbukka"/>
        </section>
    </div>
}
export default Carousel