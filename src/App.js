import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";
import TopMenue from "./components/TopMenue/TopMenue";
import SideMenueTop from "./components/SideMenue/SideMenueTop";
import SideMenue from "./components/SideMenue/SideMenue";
import Article from "./components/Article/Article";
import VisualInfo from './components/VisualInfo/VisualInfo'

const articleData = {
  title: "Martinique",
  redirect:'"Martinique" redirect here.for other uses, see ',
  redirectLink:'Martinique',
  summery:
    "Martinique is an island which is an overseas territorial collectivity of France,[5] located in the Lesser Antilles of the West Indies in the eastern Caribbean Sea, with a land area of 1,128 square kilometres (436 sq mi) and a population of 376,480 inhabitants as of January 2016. One of the Windward Islands, it is directly north of Saint Lucia, northwest of Barbados and south of Dominica",
  itemName: "History",
  itemSubtitle: "European contact",
  itemContent:
    "The island was occupied first by Arawaks, then by Caribs. The Arawaks were described as gentle timorous Indians and the Caribs as ferocious cannibal warriors. The Arawaks came from Central America in the 1st century AD and the Caribs came from the Venezuela coast around the 11th century. When Columbus arrived, the Caribs had massacred many of their adversaries, sparing the women, who they kept for their personal or domestic use",
  itemImg:'./img/titleImg/history.jpg'  
};

function App() {
  return (
    <div>
      <Container fluid>
        <Row className="total-menues-container">
          <Col ms lg="2">
            <SideMenueTop />
          </Col>
          <Col md lg="10">
            <TopMenue />
          </Col>
        </Row>
        <Row>
          <Col md lg="2">
            <SideMenue />
          </Col>
          <Col md lg="7">
            <Article articleData={articleData} />
          </Col>
          <Col md lg="3">
            <VisualInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
