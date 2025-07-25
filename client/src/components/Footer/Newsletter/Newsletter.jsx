import "./Newsletter.scss";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    faLinkdinIn,
    FaLinkedin,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <spam className="smal-text">Newsletter</spam>
            <span className="big-text">Be in the Know: Subscribe to Our Exclusive Updates!</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Unlock Exclusive offers, stay updated with Trends, and ger the Best Deals in Your Inbox - Join Now!</div>
            <div className="social-icons">
                <a href=""><div className="icon">
                    <FaFacebookF size={14}/>
                </div></a>
                <a href=""><div className="icon">
                    <FaTwitter size={14}/>
                </div></a>
                <a href=""><div className="icon">
                    <FaInstagram size={14}/>
                </div></a>
                <a href=""><div className="icon">
                    <FaLinkedin size={14}/>
                </div></a>
            </div>
        </div>
    </div>;
};

export default Newsletter;
