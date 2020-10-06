import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import wikiLogo from "img/logo/wiki-logo.png";
import SideMenueTitle from "./SideMenueTitle/SideMenueTitle";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function SideMenue(props) {
  const { isOpen } = props;
  const menueTitles = [
    { title: "Abstract", hasSubTitle: false, link: "#home" },
    {
      title: "History",
      link: "#history",
      hasSubTitle: true,
      subTitle: ["European contact", "Major century", "The revolution"],
    },
    { title: "Governance", hasSubTitle: false, link: "#governance" },
    {
      title: "Geography",
      link: "",
      hasSubTitle: true,
      subTitle: ["Subdivisions", "Mount pelee", "Geopolitics"],
    },
    { title: "Econimics", hasSubTitle: false, disabled: true },
    { title: "Demographics", link: "#demographics", hasSubTitle: false },
    { title: "Culture", disabled: true, hasSubTitle: false },
    { title: "Reference", disabled: true, hasSubTitle: false },
  ];

  const subtitleItems = menueTitles.map((item, index) => {
    const itemClass = item.disabled ? "disabled" : "";
    return (
      <a href={item.link} className={itemClass}>
        <SideMenueTitle
          key={index}
          hasSubTitle={item.hasSubTitle}
          subTitle={item.subTitle}
          title={item.title}
        />
      </a>
    );
  });
  return (
    <TransitionGroup component={null}>
      {isOpen && (
        <CSSTransition classNames="dialog" timeout={300}>
          <Container className="side-menue-container sideMenue-gray-container">
            <Row className="justify-content-center side-menue-logo-container">
              <Col md lg={12}>
                <div className="empty-row side-menue-logo-container"></div>
              </Col>
              <Col md lg={12}>
                <div className="empty-row side-menue-logo-container"></div>
              </Col>
              <Col md lg={12}>
                <div className="empty-row side-menue-logo-container"></div>
              </Col>

              <Col className="text-align-center" md lg="12" xs sm="12">
                <img
                  alt="wiki-logo"
                  className="side-menue-logo-img"
                  src={wikiLogo}
                ></img>
              </Col>
              <Col className="text-align-center" md lg="12">
                <div className="empty-row"></div>
              </Col>

              <Col className="text-align-center" md lg="12">
                <div className="side-menue-title">
                  <div>
                    <span className="side-menue-big-letter">W</span>IKIPEDI
                    <span className="side-menue-big-letter">A</span>
                  </div>

                  <span className="side-menue-sub-title">
                    The Free Encyclopedia
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="side-menue-logo-container" md lg={12}>
                <div className="empty-row"></div>
              </Col>
            </Row>

            <div className="">
              <Row className="side-menue-rows custom-border">
                <div className="empty-row"></div>

                <Col className="text-align-center " md lg="12">
                  <div className="side-menue-contents">CONTENTS</div>
                </Col>
              </Row>
              <Row className="side-menue-rows ">
                <Col md lg="12">
                  <Nav variant="tabs" className="flex-column">
                    {subtitleItems}
                  </Nav>
                </Col>
              </Row>
            </div>
          </Container>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}
