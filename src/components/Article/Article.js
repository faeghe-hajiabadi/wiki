import React from "react";
import "./article.scss";
import ArticleItem from './ArticleItems/ArticleItem';

export default function Article(props) {
  const { articleData } = props;


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
