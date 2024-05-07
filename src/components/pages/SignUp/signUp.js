import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { userCreate, updateUserProfile } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.stat?.from?.pathName || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setPasswordError("password does not match");
      return;
    }

    userCreate(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // form.reset();
        // setPasswordError("");
        navigate(from, { replace: true });
        handleUserUpdate(name, photoURL);
      })
      .catch((error) => console.error("error", error));
  };

  const handleUserUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleRegister} className="w-75 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Enter Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-danger">{passwordError}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
