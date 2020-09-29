import React from "react";
import { Row, Col } from "react-bootstrap";
import "./article.scss";
import ArticleItem from './ArticleItems/ArticleItem';

export default function Article(props) {
  const { articleData } = props;

  console.log("title", articleData);

  return (
    <>
      <div className="empty-row"></div>
      <div className="empty-row"></div>
       <ArticleItem articleData={articleData} isTitle={true} /> 

      <div className="empty-row"></div>
      <span className="article-divider-line">
        <hr />
      </span>
      <ArticleItem articleData={articleData} isTitle={false} />  
    </>
  );
}
