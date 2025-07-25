import "./Footer.scss";
import React from "react";
import { useNavigate } from "react-router-dom";


import {FaLocationArrow, FaMobile, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    const navigate = useNavigate();

    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Welcome to TechSphere, your one-stop shop for cutting-edge electronics gadgets. Discover and 
                    purchase the latest tech innovations with ease and convenience. Elevate your digital lifestyle
                    with us.
                </div>
            </div>
            <div className="col"><div className="title">Contect</div>
            <div className="c-items">
                 <FaLocationArrow/>
                 <div className="text">
                    Rajiv Nagar, Noida Sector 91, Uttar Pradesh, India, 094844
                 </div>
            </div>
            <div className="c-items">
                 <FaMobile/>
                 <div className="text">
                    Phone: 3903 388 9038
                 </div>
            </div>
            <div className="c-items">
                 <FaEnvelope/>
                 <div className="text">
                    Email: store.lku@gmail.com
                 </div>
            </div>
                </div>
            <div className="col">
            <div className="title">Categories</div>
            <span className="text" onClick={() => navigate("/category/1")}>HeadPhone</span>
            <span className="text" onClick={() => navigate("/category/4")}>smart Watches</span>
            <span className="text" onClick={() => navigate("/category/3")}>Bluetooth Speakers</span>
            <span className="text" onClick={() => navigate("/category/2")}>Wireless EarBuds</span>
            <span className="text" onClick={() => navigate("/category")}>Home Theatre</span>
            <span className="text" onClick={() => navigate("/category")}>Projectors</span>
               </div>
            <div className="col">
            <div className="title">Pages</div>
            <span className="text" onClick={() => navigate("/")}>Home</span>
            <span className="text" onClick={() => navigate("/About")}>About</span>
            <span className="text">Privacy Policy</span>
            <span className="text" onClick={() => navigate("/Categories")}>Categories</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
               </div>
            {/* <div className="col"><div className="title">Pages</div></div> */}
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    THIS IS AFFORDABLE SITE FOR BUYING NEW AND FANCY GADGETS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
};

export default Footer;
