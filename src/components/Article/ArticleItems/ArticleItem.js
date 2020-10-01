import React from "react";
import { Row, Col } from "react-bootstrap";
import "./articleItem.scss";
import articleItemImg from '../../../img/titleImg/history.jpg'

export default function ArticleItem(props) {
  const { articleData, isTitle } = props;
  const title = articleData.title;
  const redirect = articleData.redirect;
  const redirectLink = articleData.redirectLink;
  const summery = articleData.summery;
  const itemSubtitle = articleData.itemSubtitle;

  const itemName = articleData.itemName;

  if (isTitle) {
    return (
      <>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={11} sm='12' xs='12'>
            <span className="article-titel">{title}</span>
          </Col>
        </Row>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={11} sm='12' xs='12'>
            <div className="empty-row"></div>
            <span className="article-redirect">
              {redirect}{" "}
              <a
                className="atricle-redirect-link"
                href={"https://en.wikipedia.org/wiki/Martinique#History"}
              >
                {redirectLink}
              </a>
            </span>
          </Col>
        </Row>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={8} sm='12' xs='12'>
            <div className="empty-row"></div>
            <span className="article-summery">{summery}</span>
          </Col>
          <Col ms lg={3}></Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={11} sm='12' xs='12'>
            <span className="article-history">{itemName}</span>
          </Col>
        </Row>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={11} sm='12' xs='12'>
            <div className="empty-row-small"></div>
            <span className="article-subTitle">
              {itemSubtitle}
             
            </span>
          </Col>
        </Row>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={8} sm='12' xs='12'>
            <div className="empty-row"></div>
            <span className="article-summery">{summery}</span>
          </Col>
          <Col ms lg={3}></Col>
        </Row>
        <Row>
          <Col ms lg={1}></Col>
          <Col md lg={8} sm='12' xs='12'>
            <div className="empty-row"></div>
            <span className="article-summery">
              <img width='100%' src={articleItemImg}></img>
            </span>
          </Col>
          <Col ms lg={3}></Col>
        </Row>
      </>
    );
  }
}
