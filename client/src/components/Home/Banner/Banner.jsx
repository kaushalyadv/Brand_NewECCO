import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Futuristic</h1>
                <p>Welcome to TechSphere, the ultimate destination for cutting-edge tech gadgets. Step into a world 
                    where innovation knows no bounds and the possibillities are endless.
                </p>

                    <div className="ctas"> 
                    {/* ctas = call to action */}
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
