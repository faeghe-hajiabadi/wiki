import React from "react";
import "./sideMenue.scss";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import search from "../../img/icons/search-icon.png";
import menue from "../../img/icons/menue-icon.png";
import close from "../../img/btn/close.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function SideMenueTop({ setMenueOpen, trigger }) {
  const btnClick = () => {
    setMenueOpen(!trigger);
  };
  return (
    <>
      <div className="side-menue-row">
        <div md lg="4" className="side-menue-ham">
          {trigger && (
            <button onClick={btnClick} className="side-menue-searchbtn ">
              <img src={close} width="23" height="23"></img>
            </button>
          )}

          {!trigger && (
            <button onClick={btnClick} className="side-menue-searchbtn ">
              <img src={menue} width="25" height="25"></img>
            </button>
          )}
        </div>
        <div md  className='side-menue-searchbtn'>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="basic-addon1"
              className="side-menue-search-input"
            />
            <InputGroup.Prepend>
              <button className="side-menue-searchbtn">
                <img width="25" height="24" src={search}></img>
              </button>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </div>
    </>
  );
}
