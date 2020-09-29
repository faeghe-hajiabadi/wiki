import React from "react";
import islandImg from "../../img/visualInfo/visualInfo.jpg";
import { Row, Col } from "react-bootstrap";
import "./visualInfo.scss";

export default function VisualInfo() {
  return (
    <>
      <Row className="visualInfo-gray-row">
        <Col className="visualInfo-cols" md lg={12}>
          <span className="visualInfo-title">MARTINIQUE</span>
        </Col>
      </Row>
      <Row>
        <Col className="visualInfo-img" md lg={12}>
          <img src={islandImg} width="100%"></img>
        </Col>
      </Row>
      <Row className='visualInfo-gray-row'>
          <Col md lg={12} className='visualInfo-country'>
            <span className='visualInfo-country-title'>Country</span>
            <span className='visualInfo-country-name'>France</span>    
          </Col>
      </Row>
    </>
  );
}
