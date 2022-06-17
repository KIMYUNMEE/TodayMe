import React, { useEffect } from "react";
import Header from "../common/sub_header";
import Footer from "../common/footer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Rank from "./ranking";

import "../css/default.css";
import "../css/mypage.css";

function MyPage(props) {
  let history = useHistory();
  const id_index = "id";

  let emotionCheck = localStorage.getItem(id_index);

  return (
    <div>
      {useEffect(() => {
        const changeText = document.querySelector(".title_header h1 a");
        changeText.innerHTML = "마이페이지";
      })}
      <div className="mypage">
        <header>
          <Header></Header>
        </header>
        <section className="mypage_wrap01">
          <div className="profile_wrap">
            <h3 className="myName">
              <b>{props.currentUser}</b>님의 오늘의 나무는
            </h3>
            <p className="myRank">
              {props.storeRank < 2
                ? "애기나무"
                : props.storeRank <= 5
                ? "어린이나무"
                : props.storeRank >= 7
                ? "청소년나무"
                : props.storeRank >= 10
                ? "어른나무"
                : null}
              입니다.
            </p>
          </div>

          <img
            src={`../emotion${emotionCheck === null ? 1 : emotionCheck[0]}.png`}
            alt="오늘의 감정"
          ></img>
        </section>
        <section className="mypage_wrap02">
          <ul className="tab_menu">
            <li
              onClick={() => {
                history.push("/profile");
              }}
            >
              감정변경하기
              <img src="../btn_detail.svg" alt="페이지 이동 화살표"></img>
            </li>
            <li
              onClick={() => {
                localStorage.removeItem("currentUser");
              }}
            >
              <Link to="/login" className="main_nav">
                닉네임 변경하기
                <img src="../btn_detail.svg" alt="페이지 이동 화살표"></img>
              </Link>
            </li>
            <li
              onClick={() => {
                props.dispatch({ type: "내등급열기" });
              }}
            >
              오늘의 달성나무는?
              <img src="../btn_detail.svg" alt="페이지 이동 화살표"></img>
            </li>
          </ul>
        </section>
        {props.rankDegree[0].rankToggle === true ? <Rank></Rank> : null}
      </div>
      <Footer></Footer>
    </div>
  );
}

function store06(state) {
  return {
    rankDegree: state.reducer11,
    profileData: state.reducer12,
  };
}

export default connect(store06)(MyPage);
