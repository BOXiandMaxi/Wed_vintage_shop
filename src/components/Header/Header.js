import React, { useContext } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { userName, userEmail, setUserName, setUserEmail } = useUserContext();

  // ✅ วางตรงนี้ เพื่อดูว่า context โหลดมาจริงไหม
  console.log("🧠 Header context:", { userName, userEmail });

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("http://localhost:8000/logout.php", {}, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success) {
          setUserName(null);
          setUserEmail(null);
          sessionStorage.removeItem("userEmail"); // ✅ แค่ลบตอน logout
          navigate("/");
        } else {
          console.error("Logout failed:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="headerlogo" src="/picture/headerlogo.jpg" alt="logo" />
        <span className="header-logo-text">Welcome to Vintage AREA</span>
      </div>

      <div className="search-container">
        <input type="text" placeholder="กำลังหาเสื้อ..." className="search-input" />
        <img src="./picture/search.svg" alt="Search" className="search-icon" />
      </div>

      {!userName && (
        <div className="login">
          <div className="tooltip">
            <a href="http://localhost:8000/index.php#signIn">
              <button className="button-login">
                <img src="/picture/Userlogo1.png" alt="User" />
              </button>
            </a>
            <span className="tooltip-text">เข้าสู่ระบบ</span>
          </div>
        </div>
      )}

      <div className="UserNameEmail">
        {userName ? userName : "User"}
        {userName && (
          <button onClick={handleLogout} className="button-logout">Logout</button>
        )}
      </div>

      <nav className="nav">
        <ul>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink to="content" smooth={true} duration={500}>Home</ScrollLink>
            ) : (
              <RouterLink to="/">Home</RouterLink>
            )}
          </li>
          <li><ScrollLink to="featured-products" smooth={true} duration={500}>Shop</ScrollLink></li>
          <li><ScrollLink to="about-container" smooth={true} duration={500}>About</ScrollLink></li>
          <li><ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
