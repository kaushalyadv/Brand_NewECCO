import React from "react";
import "./CategorPage.scss";
// import add from "../../assets/boat-add.jpg";
import  { useState } from "react";

import CategorCont from "./CategorCont/CategoryCont";

import earbud from "../../assets/icon/headphones.png";
import projector from "../../assets/icon/projector.png";
import speaker from "../../assets/icon/speaker.png";
import watch from "../../assets/icon/watch.png";
import headphone from "../../assets/icon/OverHeadPhone.png";

         const CategorPage= () =>{
         const [temp, setTemp] = useState(1);

         function SetId(id) {
              setTemp(id);
          }
          
          return(
            <div className="main-cat">
              <div className="con-cat">
                   <li className="icon" onClick={() => SetId(1)}><img src={headphone}/></li>
                   <li className="icon" onClick={() => SetId(2)}><img src={earbud}/></li>
                   <li className="icon" onClick={() => SetId(3)}><img src={speaker}/></li>
                   <li className="icon" onClick={() => SetId(4)}><img src={watch}/></li>
                   <li className="icon" onClick={() => SetId(4)}><img src={projector}/></li>
              
              </div>
              {/* <div className="cat-main"><img src={add} alt="" /></div> */}
              <CategorCont categoryId={temp}/>
                  
            </div>
          );
};

export default CategorPage;