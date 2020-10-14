import React from "react";
import "./sideMenue.scss";
import { InputGroup, FormControl } from "react-bootstrap";
import search from "img/icons/search-icon.png";
import menue from "img/icons/menue-icon.png";
import close from "img/btn/close.png";
import {isMobile, isTablet} from 'react-device-detect';

export default function SideMenueTop({ setMenueOpen, trigger }) {
  const btnClick = () => {
    setMenueOpen(!trigger);
  };
  return (
    <>
      <div className="side-menue-row">
        <div md="4" lg="4" className="side-menue-ham">
          {(isMobile  && !trigger) && (
            
            <button
              onClick={btnClick}
              className="side-menue-searchbtn side-menue-ham-menue-btn "
            >
              <img alt="close" src={menue} width="23" height="23"></img>
            </button>
          )}
          {(isMobile && trigger) && (
            
            <button
              onClick={btnClick}
              className="side-menue-searchbtn side-menue-ham-menue-btn "
            >
              <img alt="close" src={close} width="23" height="23"></img>
            </button>
          )}
          {!isMobile  && (
            <div
              // onClick={btnClick}
              className="side-menue-searchbtn side-menue-ham-menue-btn "
            >
              <img alt="menue" src={menue} width="25" height="25"></img>
            </div>
          )}
        </div>
        <div className="side-menue-searchbtn">
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="basic-addon1"
              className="side-menue-search-input"
            />
            <InputGroup.Prepend>
              <button className="side-menue-searchbtn">
                <img alt="search" width="20" height="20" src={search}></img>
              </button>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </div>
    </>
  );
}
