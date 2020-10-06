import React from "react";
import "./article.scss";
import ArticleItem from "./ArticleItems/ArticleItem";

export default function Article(props) {
  const {
    articleData,
    articleDataSecondPart,
    articleDataTablePart,
    articleHistoryData,
  } = props;

  return (
    <>
      <div className="empty-row"></div>
      <div className="empty-row"></div>
      <ArticleItem articleData={articleData} isTitle={true} />

      <div className="empty-row"></div>
      <span className="article-divider-line">
        <hr />
      </span>
      <ArticleItem articleData={articleHistoryData} isTitle={false} />
      <div className="empty-row"></div>
      <span className="article-divider-line">
        <hr />
      </span>
      <ArticleItem articleData={articleDataSecondPart} isTitle={true} />
      <div className="empty-row"></div>
      <span className="article-divider-line">
        <hr />
      </span>
      <ArticleItem
        articleData={articleDataTablePart}
        isTitle={true}
        hasTable={true}
      />
    </>
  );
}
