import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import user_icon from "../../img/user-profile-icon.png";
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
    </a>
  ));
  return (
    <Row>
      <Col md lg="8">
        <div className="top-menue-icons-parent">
          <div>document</div>
          <div>edit</div>
          <div>message</div>
          <div>clock</div>
        </div>
      </Col>
      <Col
        md
        lg="4"
        className="justify-content-center"
        className="align-items-center"
      >
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <img src={user_icon} width="18" height="19.05"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        ,
      </Col>
    </Row>
  );
}
