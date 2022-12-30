import { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
const url = "https://jsonplaceholder.typicode.com/photos";

const Header = () => {
 
  const [cross, setCross] = useState(false);
  const [open, setOpen] = useState(false)


  const switchmode = () => {
    setCross(!cross);
  };

  const switchserch =()=>{
    setOpen(!open)
  }

  return (
    <>
      <nav>
        {/*for logo */}
        <div className="logo">
          <NavLink to="/">
            <img src=".././assets/R shopping.png" />
          </NavLink>
        </div>

        {/* for menu inside in humburger and responsive */}
        <ul className={!cross ? "navmenu" : "navmenuactive"}>
          {/* router link */}
          <li>
            <NavLink
              to="Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="Product">Product</NavLink>
          </li>
          <li>
            <NavLink to="About">About</NavLink>
          </li>
          <li>
            <NavLink to="Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="userSignup">Signup</NavLink>
          </li>
        </ul>
        {/* for humburger icons  */}

        <div className="hamburger" onClick={switchmode}>
          {cross ? (<RxCross2/>) : (<FaBars/>)}
        </div>

        <div className="serch_cart_wish_lgin_icon">

          {/* for searchinput serchicon */}
          <div className="serchicon" onClick={switchserch}>
            {!open ? (<input name="name" className="serchinput" placeholder="search" />) : (<BsSearch />) }
          </div>

          {/* fro wishlist icon */}
          <div className="wishlist" >
            <NavLink to="wishlist">
            <BsSuitHeartFill />
            </NavLink>
          </div>

          {/* for cart icon */}
          <div className="cart">
            <NavLink to="cart">
            <BsCart4 />
            </NavLink>
          </div>

          {/* for loginicon */}
          <div className="loginicon">

            <BsFillPersonFill />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
