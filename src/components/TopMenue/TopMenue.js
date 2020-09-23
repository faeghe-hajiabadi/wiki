import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import user_icon from "../../img/user-profile-icon.png";
import document from "../../img/document-icon.png";
import edite from "../../img/editing-icon.png";
import message from "../../img/message-icon.png";
import clock from "../../img/clock-icon.png";

import "./topMenue.scss";

export default function TopMenue() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      className="top-menue-profile-btn"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}

      <span className="top-menue-icon-down"></span>
      <span className="top-menue-dow-arrow">&#x25bc;</span>
    </a>
  ));
  return (
    <Row className="top-menue-row">
      <Col md lg="8">
        <div className="top-menue-icons-parent">
          <div className="padding-box-10">
            <img width="20" height="20" src={clock}></img>
          </div>
          <div className="padding-box-10">
            <img width="20" height="21.62" src={message}></img>
          </div>
          <div className="padding-box-10">
            <img width="20" height="21.10" src={edite}></img>
          </div>
          <div className="padding-box-10">
            <img width="15.25" height="20" src={document}></img>
          </div>
        </div>
      </Col>
      <Col md mdOffset={5} lg="4" className="top-menue-col">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <img src={user_icon} width="18" height="19.05"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}
