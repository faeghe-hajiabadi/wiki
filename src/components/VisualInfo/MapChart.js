import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import "./mapInfo.scss";


const MapChart = ({ setTooltipContent }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const markers = [
    {
      markerOffset: 10,
      name: "Martinique",
      coordinates: [2.349014, 48.864716],
    },
  ];
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        <Line
        from={[2, -35]}
        to={[2, 80]}
        stroke="#BFC2C3"
        strokeWidth={2}
        strokeLinecap="round"
      />
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(() => {
                return {
                  text: `${name} `,
                  number: "   14°N 60°W",
                };
              });
            }}
            onMouseLeave={() => {
              setTooltipContent(() => {
                return {
                  text: ``,
                  number: "",
                };
              });
            }}
          >
           
            <circle r={10} fill="#29A0EB" stroke="#29A0EB" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
    </>
  );
};
export default memo(MapChart);
