import React from "react";
import { Row, Col, Tooltip } from "react-bootstrap";
import "./articleItem.scss";
import parse from "html-react-parser";
import articleItemImg from "../../../img/titleImg/history.jpg";

export default function ArticleItem(props) {
  const { articleData, isTitle, hasTable } = props;
  const title = articleData.title;
  const link = articleData.link;
  const redirect = articleData.redirect;
  const redirectLink = articleData.redirectLink;
  const summery = articleData.summery;
  const itemSubtitle = articleData.itemSubtitle;
  const itemContent = articleData.itemContent;
  const table = articleData.table;

  const itemName = articleData.itemName;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip !!!
    </Tooltip>
  );

  if (isTitle) {
    return (
      <>
        <Row>
          <Col md={1} lg={1}></Col>
          <Col md={11} lg={11} sm="12" xs="12">
            <span className="article-titel" id={link}>
              {title}
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col md={11} lg={11} sm="12" xs="12">
            <div className="empty-row"></div>
            <span className="article-redirect">{parse(redirect)}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col md={8} lg={8} sm="12" xs="12">
            <div className="empty-row"></div>
            <span className="article-summery">
              <div className="text-align-justify">{parse(summery)}</div>
            </span>
          </Col>
          <Col lg={3}></Col>
        </Row>
        {hasTable && (
          <Row>
            <Col lg="1" md="3"></Col>
            <Col lg="10" md="10">
              <div className="text-align-justify article-item-table"  >{parse(table)}</div>
            </Col>
            <Col lg="1" md="3"></Col>
          </Row>
        )}
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col lg={1}></Col>
          <Col md={11} lg={11} sm="12" xs="12">
            <span id={link} className="article-history">
              {itemName}
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col md={11} lg={11} sm="12" xs="12">
            <div className="empty-row-small"></div>
            <span className="article-subTitle">{itemSubtitle}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col md={8} lg={8} sm="12" xs="12">
            <div className="empty-row"></div>
            <span className="article-summery">
              <div className="text-align-justify">{parse(itemContent)}</div>
            </span>
          </Col>
          <Col lg={3}></Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col md={8} lg={8} sm="12" xs="12">
            <div className="empty-row"></div>
            <span className="article-summery">
              <img alt="articleItem" width="100%" src={articleItemImg}></img>
            </span>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </>
    );
  }
}
