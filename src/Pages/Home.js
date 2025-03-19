import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import HeroSection from "../Componet/HeroSection";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="white">
      <div className="nav115">
        <Navbar />
      </div>
    
      <div className="part1">
        <div className="part2">
          <div className="headline">
            <div className="img32">
              <h1 className="title">
                Welcome to Sai sanchit <br />
                <span>Tiffin </span>Home<br />
              </h1>
            </div>

            <div className="para">
              <p>Your Delicious Destination!</p>
            </div>
            <p>  
  Enjoy healthy, homemade meals delivered to your doorstep in Kopargaon.  
  <span>Start enjoying nutritious food,</span>  
  <br /> just the way you like it, wherever you are in Kopargaon.  
</p>


            <Link to="/About">
              <button className="okb">About us</button>
            </Link>
          </div>
          <div className="partimg"></div>
        </div>
      </div>

      <div className="partb">
        <div className="partbb">
          <img src="/IMAGES/pngegg.png" alt="" />
        </div>

        <div className="box1">
          <div className="box11">
            <div className="t1">
              <h1>
                Start Your Food <br />
                Adventure Here
              </h1>
            </div>
          </div>
          <div className="box12">
            <h1>
              Enjoy monthly tiffin <br /> service
              for just Rs 3000. <br/> Each tiffin costs only Rs 50.
            </h1>
          </div>
        </div>
        <div className="box2">
          <div className="box22">
            <h1>
              Open Daily 12AM-8PM <br />
              Anapurna Nagar
              <br />
              kopergaon
            </h1>
          </div>
          <div className="box33">
            <div className="box113">
              <img src="/IMAGES/cimg.png" alt="" srcset="" />
              <h3>Enjoy delicious tiffin services  in Kopargaon,  with special dishes.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="homeservices">
        <div className="homeservices2"></div>
        <img className="service" src="/IMAGES/HOME33.jpg" alt="" srcset="" />
        <div className="home1">
          <div className="hf1">
            <div className="off">
              20% <br /> OFF
            </div>
            <div className="on"></div>
          </div>
          <div className="hf11">
            <div className="cont">
              <div className="location1">
                <img src="/IMAGES/Name.png" alt="" srcset="" />
                <h1>NAME:- NILESH GANDE</h1>
              </div>

              <div className="location2">
                <img src="/IMAGES/Call2.png" alt="" srcset="" />
                <h1>Pho:-8007077730</h1>
              </div>
              <div className="location3">
                <img src="/IMAGES/Location.png" alt="" srcset="" />
                <h1>Kopergaon Dist Nagar 423601</h1>
              </div>
            </div>
            <div className="car">
              <div className="car12">
                <img src="/IMAGES/Car.png" alt="" srcset="" />
                <h1> FREE HOME DILIVERY</h1>
              </div>
              <p>IN KOPERGAON ONLY</p>
            </div>
          </div>
        </div>

        <div className="home2">
          <div className="hf2"></div>
          <div className="hf22"></div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
