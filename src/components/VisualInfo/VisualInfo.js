import React from "react";
import islandImg from "img/visualInfo/visualInfo.jpg";
import { Row, Col } from "react-bootstrap";
import "./visualInfo.scss";
import MapInfo from "./MapInfo";
import playBtn from "img/btn/playBtn.png";

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
          <img alt='martinique island' src={islandImg} width="100%"></img>
        </Col>
      </Row>
      <Row className="visualInfo-country-parent">
        <Col md lg={12} className="visualInfo-country">
          <span className="visualInfo-country-title">Country</span>
          <span className="visualInfo-country-name">France</span>
        </Col>
      </Row>

      <Row className="visualInfo-gray-rom-map">
        <Col className="visualInfoMap" md lg={12}>
          <MapInfo />
        </Col>
      </Row>
      <Row className="visualInfo-country-parent">
        <Col md lg={12} className="visualInfo-country">
          <span className="visualInfo-country-area-title">
            AREA
            <span className="visualInfo-country-area">
              1128 <span className="visualInfo-country-area-span">km²</span>
            </span>
          </span>
          <span className="visualInfo-country-area-title">
            DENSITY
            <span className="visualInfo-country-area">
              340 <span className="visualInfo-country-area-span">hab/km²</span>
            </span>
          </span>
        </Col>
      </Row>
      <Row className="visualInfo-country-parent visualInfo-gray-row-last">
        <Col className="visualInfo-video">
          <a href='https://www.youtube.com/watch?v=FMxNm7hJi1A&feature=emb_logo&ab_channel=MartiniqueMagnifique'>
            <img  alt='play' src={playBtn} width="40"></img>
          </a>
          
          <span className="visualInfo-video-title">
            <span>The National Anthem </span>
            <div>Recorded in 1995 </div>
          </span>
        </Col>
      </Row>
    </>
  );
}
