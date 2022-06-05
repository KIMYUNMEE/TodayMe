import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "../css/index.css";
function Header(props) {
  return (
    <div className="title_header">
      <Link to="/Mypage" className="main_nav">
        <img src="../btn_menu.svg" alt="nav"></img>
      </Link>
      <h1>
        <Link to="/">오늘의 나 </Link>
      </h1>
      {props.state3[0].noAlarm === true ? (
        <img
          src="../alarm.svg"
          alt="bell"
          onClick={() => {
            props.dispatch({ type: "알림창열기" });
          }}
        ></img>
      ) : (
        <img src="../no_alarm.svg" alt="bell" className="down"></img>
      )}
    </div>
  );
}

function store09(state) {
  return {
    state: state.reducer2,
    state2: state.reducer3,
    state3: state.reducer4,
  };
}

export default connect(store09)(Header);
