import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../index.css"

const Navbar = ({ isLogged }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  return (
    <div className="flex justify-center items-center bg-main font-family bg-white">
      <div className="glow-back"></div>
      <div className="nav-Main bg-main-color flex justify-center bg-cyan-800 text-green-grade gap-2 md:gap-12 lg:gap-8 p-2 px-5 m-3 rounded-full relative items-center ">
        <Link to="/">
          <div className="nav-Logo flex gap-1 items-center">
            <CodeIcon
              sx={{
                rotate: "40deg",
                fontSize: "24px",
                fontWeight: "1000",
                color: "#AEFD91",
              }}
            />
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl green-grade">HealthHubConnect</h1>
          </div>
        </Link>
        <div className="nav-Mid flex gap-5">
          <div className="hidden md:flex gap-5 text-sm text-zinc-300">
            {/* <Link to="/Question">Login</Link> */}
            <Link to="/AboutUs">About Us</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
        </div>
        <div className="login-signup flex gap-2">
          <div className="bg-border-main px-3 py-1 text-black rounded-full font-semibold">
            {isLogged ? (
              <Link to="/Profile">Profile</Link>
            ) : (
              <Link to="/Log-In" className="text-white font-semibold">Login</Link>
            )}
          </div>
        </div>
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="bg-border-main px-3 py-1 text-black rounded-full font-semibold"
          >
            Menu
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 bg-main-color text-sm text-white rounded-md p-2 mt-1">
              <Link to="/Question" className="block py-1">
                Question
              </Link>
              <Link to="/AboutUs" className="block py-1">
                About Us
              </Link>
              <Link to="/ContactUs" className="block py-1">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.Reducer.isLogged,
  };
};

export default connect(mapStateToProps)(Navbar);