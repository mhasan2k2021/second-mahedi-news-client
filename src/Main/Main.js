import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSide from "../components/shared/LeftSide/LeftSide";
import RightSide from "../components/shared/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="pt-3">
        <Row>
          <Col lg="2">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
