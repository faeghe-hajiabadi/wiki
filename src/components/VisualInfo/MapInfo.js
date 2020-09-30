import React, { useState } from "react";
import MapChart from "./MapChart";
import "./mapInfo.scss";
import ReactTooltip from "react-tooltip";

export default function MapInfo() {
  const [Content, setContent] = useState({ text: "", number: "" });

  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip className="mapInfoTooltip ">
        {Content.text && (
          <span className='mapInfoTooltip-parent'>
            {Content.text}
            <span className='mapInfo-content-number'>{Content.number}</span>
          </span>
        )}
      </ReactTooltip>
    </div>
  );
}
