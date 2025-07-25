import React, { useEffect, useState, useCallback } from "react";
import "./Text.scss";
import { fetchDataFromApi, postDataToApi } from "../../utils/api";

const Text = () => {
  const [cartItems, setCartItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchCartItems = useCallback(() => {
    fetchDataFromApi("/api/texts")
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      postDataToApi("/api/texts", { text: inputText })
        .then((res) => {
          console.log("Text successfully stored:", res);
          setInputText("");
          fetchCartItems();
        })
        .catch((error) => {
          console.error("Error storing text:", error);
        });
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <div className="shop-by-text">
      <div className="texts-cat">
        {cartItems.map((item) => (
          <div className="text-area" key={item.id}>
            <span className="texts">{item.attributes.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button type="submit">Save Text</button>
      </form>
    </div>
  );
};

export default Text;
