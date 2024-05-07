import React, { useContext } from "react";
import { ButtonGroup, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./RightSide.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const RightSide = () => {
  const { providerLogIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.stat?.from?.pathName || "/";

  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error("error", error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-primary"
          className=" px-3 py-1 mt-2 mb-2 d-flex align-items-center"
        >
          <FaGoogle className="me-2"></FaGoogle> Google
        </Button>
        <Button
          variant="outline-dark"
          className="px-3 py-1 d-flex align-items-center"
        >
          <FaGithub className="me-2" /> Github
        </Button>
      </ButtonGroup>
      <h6 className="mt-3">log in</h6>
      <ListGroup>
        <ListGroup.Item className="get-cursor mb-2 d-flex align-items-center">
          <FaFacebook className="me-2" />
          Facebook
        </ListGroup.Item>
        <ListGroup.Item className="get-cursor mb-2 d-flex align-items-center">
          <FaInstagram className="me-2" />
          Instagram
        </ListGroup.Item>
        <ListGroup.Item className="get-cursor mb-2 d-flex align-items-center">
          <FaTwitter className="me-2" />
          Twitter
        </ListGroup.Item>
        <ListGroup.Item className="get-cursor mb-2 d-flex align-items-center">
          <FaLinkedinIn className="me-2"></FaLinkedinIn>LinkedIn
        </ListGroup.Item>
        <ListGroup.Item className="get-cursor mb-2 d-flex align-items-center">
          <FaWhatsapp className="me-2" />
          Whatsapp
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSide;
