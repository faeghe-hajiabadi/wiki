import React, { useState } from "react";
import "./sideMenueTitle.scss";
import narrowDownArrow from "../../../img/icons/narrowDownArrow.png";
import narrowUpArrow from "../../../img/icons/narrowUpArrow.png";

export default function SideMenueTitle(props) {
  const [hideItems, setHide] = useState(true);
  const { hasSubTitle, subTitle, title } = props;
  const toggleBtn = () => {
    setHide(!hideItems);
  };
  const subtitleItems = subTitle
    ? subTitle.map((item, key) => {
        return item;
      })
    : "";
  return (
    <>
      {hasSubTitle && (
        <>
          <div className="side-menue-title-rows">
            <span>{title}</span>
            <button onClick={toggleBtn} className="side-menue-btn">
              <img
                width="15"
                src={hideItems ? narrowDownArrow : narrowUpArrow}
              ></img>
            </button>
          </div>
          {!hideItems && <div>{subtitleItems}</div>}
        </>
      )}
      {!hasSubTitle && (
        <>
          <div className="side-menue-title-rows">{title}</div>
        </>
      )}
    </>
  );
}
