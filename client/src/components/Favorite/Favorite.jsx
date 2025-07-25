import "./Favorite.scss";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../utils/context";
import { useNavigate} from "react-router-dom";
import heart from "../../assets/icon/heart.png"
import cursor from "../../assets/icon/cursor_up.png"



const Favorite = () => {
   const{FavItems, handleRemoveFromFav} = useContext(Context);
   const navigate = useNavigate();

    return <div className="fav-products">
    <div className="bigdiv">

      {!!FavItems?.length && <><span className="toptext">YOUR PERSONALIZED PICKS</span></> }

        {!FavItems?.length && <div className="texts">
          <div className="empty-cart">
          <div className="inside-empty">
                    <div className="inside-box"></div>
                    <div className="spans">
                    <span className="spanOne"></span>
                    <span className="spanTwo"></span>
                    <span className="spanThree"></span>
                    </div>  
             </div>
              <div className="imgs">
                <img src={heart} id="heart"/>
                <img src={cursor} id="cursor" />
              </div>
          </div>
             <div className="inside-text">
                  <span className="header">NO FAVORITES YET</span> 
                  <span className="bottom">Elevate your tech game and fill this page with your beloved gadgets, transforming it into a digital sanctuary of innovation.</span>
             </div>
                                 
          </div> 
         
          }


          {!!FavItems?.length && <>
            <div className="parent-design">

        {FavItems.map(item => (
        
            <div className="desing-inside">
             <div key={item.id} className="cart-product" >
             {/* onClick={() => {navigate("/product/" + item.id);}} */}
               <div className="img-container">
                   <img src={process.env.REACT_APP_DEV_URL+ item.attributes.img.data[0].attributes.url} alt="" />
                   <div className="close-btn" onClick={() => handleRemoveFromFav(item)}> <img src={heart}/></div>

               </div>
               <div className="prod-details">
                  <div className="prod-details-child">
                   <span className="name">{item.attributes.title}</span>
                   <span className="line"></span>
                   <span className="price">&#8377;{item.attributes.price}</span>
                   <span className="line"></span>
                   <span className="categories">{item.attributes.categories.data[0].attributes.title}</span>
                   <span className="line"></span>

                   </div>
                  
               </div>
         
           </div>
     
          </div>
          
        ))
        }</div>
          </> }
        

          </div>
          </div>;
};

export default Favorite;
