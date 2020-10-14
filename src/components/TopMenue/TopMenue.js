import React from "react";
import { Row, Col, Dropdown, Tabs, Tab } from "react-bootstrap";
import user_icon from "img/icons/user-profile-icon.png";
import document from "img/icons/document-icon.png";
import edite from "img/icons/editing-icon.png";
import message from "img/icons/message-icon.png";
import clock from "img/icons/clock-icon.png";

import "./topMenue.scss";

export default function TopMenue() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/"
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
      <Col md='9' lg="9" sm="11" xs="11">
        <div className="top-menue-icons-parent">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab
              eventKey="home"
              title={
                <div className="padding-box-10">
                  <img alt="clock" width="20" height="20" src={clock}></img>
                </div>
              }
            ></Tab>
            <Tab
              eventKey="profile"
              title={
                <div className="padding-box-10">
                  <img
                    alt="message"
                    width="20"
                    height="21.62"
                    src={message}
                  ></img>
                </div>
              }
            ></Tab>
            <Tab
              eventKey="contact"
              title={
                <div className="padding-box-10">
                  <img alt="edite" width="20" height="21.10" src={edite}></img>
                </div>
              }
            ></Tab>
            <Tab
              eventKey="document"
              title={
                <div className="padding-box-10">
                  <img
                    alt="document"
                    width="15.25"
                    height="20"
                    src={document}
                  ></img>
                </div>
              }
            ></Tab>
          </Tabs>
        </div>
      </Col>
      <Col md="3" lg="3" ms="3" sm="1" xs="1" className="top-menue-col col-12">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <img alt="user" src={user_icon} width="18" height="19.05"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Faeghe Hajiabadi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>{" "}
    </Row>
  );
}
