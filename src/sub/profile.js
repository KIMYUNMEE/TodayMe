import React, { useEffect } from "react";
import Header from "../common/sub_header";
import Footer from "../common/footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/default.css";
import "../css/profile.css";
import "../css/index.css";

function Profile(props) {
  let emotion_index = [1, 2, 3, 4, 5, 6];

  const id_index = "id";

  let emotionCheck = localStorage.getItem(id_index);

  let history = useHistory();
  return (
    <div>
      {useEffect(() => {
        const changeText = document.querySelector(".title_header h1 a");
        changeText.innerHTML = "프로필 감정 변경";
      })}

      <div className="wrap profile_wrap">
        <header>
          <Header></Header>
        </header>
        <div className="my_emotion">
          <img
            src={`../emotion${emotionCheck === null ? 1 : emotionCheck[0]}.png`}
            alt="선택한 감정"
          ></img>
          <p>현재프로필</p>
        </div>
        <div className="emotionList">
          {emotion_index.map(function (a, i) {
            return (
              <p
                key={i}
                onClick={() => {
                  props.dispatch({ type: "id값전송", payload12: i + 1 });
                }}
              >
                <img src={`../emotion${i + 1}.png`} alt="감정"></img>
              </p>
            );
          })}
          <button
            onClick={() => {
              history.push("/mypage");
            }}
          >
            바꾸기
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

function store07(state) {
  return {
    profileData: state.reducer12,
  };
}

export default connect(store07)(Profile);
