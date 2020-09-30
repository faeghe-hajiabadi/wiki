import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wikiLogo from "../../img/logo/wiki-logo.png";
import SideMenueTitle from "./SideMenueTitle/SideMenueTitle";

export default function SideMenue() {
  const menueTitles = [
    { title: "Abstract", hasSubTitle: false },
    {
      title: "History",
      hasSubTitle: true,
      subTitle: ["European contact", "Major century", "The revolution"],
    },
    { title: "Governance", hasSubTitle: false },
    {
      title: "Geography",
      hasSubTitle: true,
      subTitle: ["Subdivisions", "Mount pelee", "Geopolitics"],
    },
    { title: "Econimics", hasSubTitle: false },
    { title: "Demographics", hasSubTitle: false },
    { title: "Culture", hasSubTitle: false },
    { title: "Reference", hasSubTitle: false },
  ];

  const subtitleItems = menueTitles.map((item, key) => {
    return (
      <SideMenueTitle
        hasSubTitle={item.hasSubTitle}
        subTitle={item.subTitle}
        title={item.title}
      />
    );
  });
  return (
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

        <Col className="text-align-center" md lg="12">
          <img width="149.6" height="100" src={wikiLogo}></img>
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

            <span className="side-menue-sub-title">The Free Encyclopedia</span>
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
            {subtitleItems}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
