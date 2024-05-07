import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut()
      .then((result) => {})
      .catch((error) => console.error("error", error));
  };
  return (
    <div className="header-container">
      <div className="d-flex align-items-center">
        <h3 className="me-3">Mahadi Hasan</h3>
        <div>
          <h6>{user?.displayName}</h6>
        </div>
        <p>{user?.email}</p>
      </div>

      <div className="d-flex align-items-center">
        <div className="menu-container">
          <Link>Home</Link>
          {user?.uid ? (
            <Link onClick={handleLogOut}>LogOut</Link>
          ) : (
            <>
              <Link to="/login">LogIn</Link>
              <Link to="/signUp">SignUp</Link>
            </>
          )}
        </div>
        <div className="user-info">
          {user?.photoURL ? (
            <img className="user-photo" src={user.photoURL} alt="user"></img>
          ) : (
            <div className="user-photo d-flex align-items-center justify-content-center">
              <FaUserAlt className="user-icon"></FaUserAlt>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
