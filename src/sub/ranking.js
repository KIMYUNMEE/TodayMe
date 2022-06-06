import React from "react";
import { connect } from "react-redux";
import "../css/default.css";
import "../css/rank.css";

function Rank(props) {
  return (
    <div className="rank_wrap">
      <span className="txt">오늘의 나의 하루는?</span>
      <ul className="rankList">
        <li>
          <img src="../../rank01.png" alt="나무 이미지1"></img>
          <div>
            <strong>애기나무</strong>
            <p>100% 연속 2회 미만</p>
          </div>
        </li>
        <li>
          <img src="../../rank02.png" alt="나무 이미지2"></img>
          <div>
            <strong>어린이나무</strong>
            <p>100% 연속 5회 이하</p>
          </div>
        </li>
        <li>
          <img src="../../rank03.png" alt="나무 이미지3"></img>
          <div>
            <strong>청소년나무</strong>
            <p>100% 연속 7회 이하</p>
          </div>
        </li>
        <li>
          <img src="../../rank04.png" alt="나무 이미지4"></img>
          <div>
            <strong>어른나무</strong>
            <p>100% 연속 10회 이상</p>
          </div>
        </li>
      </ul>
      <div
        className="rankClose"
        onClick={() => {
          props.dispatch({ type: "내등급닫기" });
        }}
      >
        <img src="../../btn_close.svg" alt="등급닫기"></img>
      </div>
    </div>
  );
}

function store08(state) {
  return {
    rankPoint: state.reducer7,
  };
}

export default connect(store08)(Rank);
