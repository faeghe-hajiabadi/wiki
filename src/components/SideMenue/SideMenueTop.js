import React from "react";
import "./sideMenue.scss";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import search from "../../img/icons/search-icon.png";
import menue from "../../img/icons/menue-icon.png";
import wikiLogo from "../../img/logo/wiki-logo.png";

export default function SideMenueTop() {
  return (
    <>
      <Row className="side-menue-row">
        <Col md lg="4" className="side-menue-ham">
          <button className="side-menue-searchbtn ">
            <img src={menue} width="35" height="35"></img>
          </button>
        </Col>
        <Col md lg="8">
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="basic-addon1"
              className="side-menue-search-input"
            />
            <InputGroup.Prepend>
              <button className="side-menue-searchbtn">
                <img width="22" height="22" src={search}></img>
              </button>
            </InputGroup.Prepend>
          </InputGroup>
        </Col>
      </Row>
    </>
  );
}
