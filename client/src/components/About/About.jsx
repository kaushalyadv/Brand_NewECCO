import "./About.scss";

import flip from "../../assets/companies/flipkart.png";
import amazon from "../../assets/companies/amazon.png";
import alibaba from "../../assets/companies/alibaba.png";
import ebay from "../../assets/companies/ebay.png";
import TechSphere from "../../assets/companies/TechSphereLogo.jpg";
import walmart from "../../assets/companies/walmart.png";
const About = () => {
   
    return(
         
          <div class="hero">
           
    
      <div class="timeline">
      <div className="round-wdth"><div className="round"></div></div>
        <div class="container left-container">
            <img src={TechSphere} alt=""/>
          <div class="textbox">
            <h2>TechSphere's Inception</h2>
            <small>June 1, 2023</small>
            <p>
            TechSphere is founded, driven by a passion for technology and a vision to provide customers with cutting-edge products and exceptional service.
            </p>
            <span class="left-container-arrow"></span>
          </div>
        </div>
        <div class="container right-container">
            <img src={ebay} alt=""/>
          <div class="textbox">
            <h2>Strategic Partnership with eBay</h2>
            <small>July 2023</small>
            <p>
            TechSphere forms a strategic partnership with eBay, expanding its reach and offering customers access to a diverse range of products through the renowned online marketplace.
            </p>
            <span class="right-container-arrow"></span>

          </div>
        </div>
        <div class="container left-container">
            <img src={amazon} alt=""/>
          <div class="textbox">
            <h2> Collaboration with Amazon</h2>
            <small>January 2024</small>
            <p>
            TechSphere collaborates with Amazon, enabling customers to purchase TechSphere products through the global ecommerce giant's platform, further enhancing convenience and accessibility.
            </p>
            <span class="left-container-arrow"></span>

          </div>
        </div>
        <div class="container right-container">
            <img src={alibaba} alt=""/>
          <div class="textbox">
            <h2> Alliance with Alibaba</h2>
            <small>March 2024</small>
            <p>
            TechSphere forms an alliance with Alibaba, tapping into the vast resources and international network of the leading global ecommerce company, facilitating global expansion and boosting TechSphere's market presence.
            </p>
            <span class="right-container-arrow"></span>

          </div>
        </div>
        <div class="container left-container">
            <img id="flip" src={flip} alt=""/>
          <div class="textbox">
            <h2>Exclusive Partnership with Flipkart and Boat</h2>
            <small>June 2024</small>
            <p>
            TechSphere secures an exclusive partnership with Flipkart, India's leading ecommerce platform, and Boat, a prominent audio accessories brand, offering customers exclusive deals and product bundles.
            </p>
            <span class="left-container-arrow"></span>

          </div>
        </div>
        <div class="container right-container">
            <img src={walmart} alt=""/>
          <div class="textbox">
            <h2>Collaboration with Walmart</h2>
            <small>September 2024</small>
            <p>
            TechSphere enters into a collaboration with Walmart, leveraging the retail giant's extensive supply chain and logistics capabilities to streamline operations and ensure efficient product delivery.
            </p>
            <span class="right-container-arrow"></span>

          </div>
        </div>
        <div className="round-wdth"><div className="round"></div></div>

      </div>
      </div>
  
 



    );
};    
export default About;
