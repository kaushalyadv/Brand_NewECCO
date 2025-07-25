import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showcart, setshowcart] = useState(false);
  const [showSearch, setshowsearch] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")} id="home">
              Home
            </li>
            <li onClick={() => navigate("/About")} id="about">
              About
            </li>
            <li onClick={() => navigate("/categories")} id="cat">
              Categories
            </li>
          </ul>

          <div className="center" onClick={() => navigate("/")}>
            TechSphere
          </div>
          <div className="right">
            <TbSearch onClick={() => setshowsearch(true)} />
            <div className="anim" onClick={() => navigate("/favorite")}></div>
            <span className="cart-icon" onClick={() => setshowcart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setshowcart={setshowcart} />}
      {showSearch && <Search setshowsearch={setshowsearch} />}
    </>
  );
};

export default Header;
