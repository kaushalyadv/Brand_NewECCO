import {useNavigate} from "react-router-dom";
import React from "react";
import "./Category.scss";

const Category = ({ categories }) => {
    const Navigate = useNavigate();
    return (
      <div className="shop-by-category">
        <div className="categories">
          {categories && categories.data && categories.data.length > 0 ? (
            categories?.data?.map((item) => (
              <div key={item.id} className="category" onClick={() => Navigate(`/category/${item.id}`)}>
                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="Category" />
              </div>
            ))
          ) : null}
        </div>
      </div>
    );
  };
  

export default Category;
