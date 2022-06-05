import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  return (
    <div className="title_header">
      <Link to="/" className="header_nav">
        <img src="../btn_back.svg" alt="nav"></img>
      </Link>

      <h1>
        <Link to="/">오늘의 나 </Link>
      </h1>
    </div>
  );
}

function store10(state) {
  return {
    state: state.reducer2,
    state2: state.reducer3,
    state3: state.reducer4,
  };
}

export default connect(store10)(Header);
