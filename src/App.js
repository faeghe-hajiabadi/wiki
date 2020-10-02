import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import TopMenue from "./components/TopMenue/TopMenue";
import SideMenueTop from "./components/SideMenue/SideMenueTop";
import SideMenue from "./components/SideMenue/SideMenue";
import Article from "./components/Article/Article";
import VisualInfo from "./components/VisualInfo/VisualInfo";
import { isMobile } from "react-device-detect";

const articleData = {
  title: "Martinique",
  redirect: '"Martinique" redirect here.for other uses, see ',
  redirectLink: "Martinique",
  summery:
    "Martinique is an island which is an overseas territorial collectivity of France,[5] located in the Lesser Antilles of the West Indies in the eastern Caribbean Sea, with a land area of 1,128 square kilometres (436 sq mi) and a population of 376,480 inhabitants as of January 2016. One of the Windward Islands, it is directly north of Saint Lucia, northwest of Barbados and south of Dominica",
  itemName: "History",
  itemSubtitle: "European contact",
  itemContent:
    "The island was occupied first by Arawaks, then by Caribs. The Arawaks were described as gentle timorous Indians and the Caribs as ferocious cannibal warriors. The Arawaks came from Central America in the 1st century AD and the Caribs came from the Venezuela coast around the 11th century. When Columbus arrived, the Caribs had massacred many of their adversaries, sparing the women, who they kept for their personal or domestic use",
  itemImg: "./img/titleImg/history.jpg",
};

function App() {
  const [isMenueOpen, setMenueOpen] = useState(isMobile ? false : true);
  return (
    <div>
      <Container fluid>
        <Row className="total-menues-container">
          <Col md="2" lg="2" sm="2" xs="12">
            <SideMenueTop setMenueOpen={setMenueOpen} trigger={isMenueOpen} />
          </Col>
          <Col md="10" lg="10" sm="10" xs="12">
            <TopMenue />
          </Col>
        </Row>
        <Row>
          <Col md="3" lg="2" sm="3" xs={12}>
            <SideMenue isOpen={isMenueOpen} />
          </Col>
          <Col md="6" lg="7" sm="5" xs="12">
            <Article articleData={articleData} />
          </Col>
          <Col md="3" lg="3" sm="4" xs="12">
            <VisualInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
