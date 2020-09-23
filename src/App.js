import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import TopMenue from "./components/TopMenue/TopMenue";
import SideMenue from "./components/SideMenue/SideMenue";

function App() {
  return (
    <div>
      <Container fluid>
        <Row className='total-menues-container'>
          <Col md lg="9">
            <TopMenue />
          </Col>
          <Col ms lg="3">
            <SideMenue />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
