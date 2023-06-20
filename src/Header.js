import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  if (user) {
    var username = user.email;
    var finusername = username.substr(0, username.indexOf("@"));
    var finalusername = finusername.replace(".", " ");
    var enduser = finalusername.replace(/[0-9]/g, " ");
    // console.log(username)
  }

  const handleAuthantication = () => {
    if (user) {
      auth.signOut();
      console.log("this is our", user);
    } else {
      console.log("sorry function is not working");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src="/images/amazonlogo.png" alt="xyz" className="header_logo" />
      </Link>

      <h1>hi</h1>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchicon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthantication} className="header_option">
            <span className="header_optionLineOne">
              Heloo {!user ? "Guest" : enduser}{" "}
            </span>

            <span className="header_optionLineTwo">
              {user ? "sign out" : "sign in"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>

          <span className="header_optionLineTwo">& orders </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo Header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
