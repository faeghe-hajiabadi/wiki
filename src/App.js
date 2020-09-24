import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import TopMenue from "./components/TopMenue/TopMenue";
import SideMenueTop from "./components/SideMenue/SideMenueTop";
import SideMenue from "./components/SideMenue/SideMenue";

function App() {
  return (
    <div>
      <Container fluid>
        <Row className="total-menues-container">
          <Col ms lg="2">
            <SideMenueTop />
          </Col>
          <Col md lg="10">
            <TopMenue />
          </Col>
        </Row>
        <Row>
          <Col md lg="2">
            <SideMenue />
          </Col>
          <Col md lg="5"></Col>
          <Col md lg="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
