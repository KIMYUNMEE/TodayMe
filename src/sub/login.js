import React, { useEffect } from "react";
import "../css/default.css";
import "../css/index.css";
import "../css/login.css";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function AskForm(props) {
  let history = useHistory();
  useEffect(() => {
    const user_name = "currentUser";
    const form = document.querySelector(".form"),
      input = form.querySelector("input");
    function askName() {
      form.addEventListener("submit", goSubmit);
    }
    function saveName(text) {
      localStorage.setItem(user_name, text);
    }

    function goSubmit(event) {
      event.preventDefault();
      const currentValue = input.value;
      sineUp(currentValue);
      saveName(currentValue);
    }
    function sineUp() {
      history.push("/");
      props.dispatch({ type: "로그인성공" });
      const toDay = new Date();
      const gettyear = toDay.getFullYear();
      const gettmonth = toDay.getMonth();
      const gettDay = toDay.getDate();
      let saveDay = {
        findyear: gettyear,
        findmonth: gettmonth,
        findDay: gettDay,
      };
      props.dispatch({ type: "첫로그인", payload6: saveDay });
    }

    function uploadName() {
      let currentUser = localStorage.getItem(user_name);
      if (currentUser === null) {
        askName();
      } else {
        sineUp(currentUser);
      }
    }

    const init = () => {
      uploadName();
    };

    init();
  });
  return (
    <div className="box_wrap">
      <form className="form">
        <input type="text" placeholder="사용 할 닉네임을 적어주세요." />
        <p className="reset">
          ( 새롭게 로그인하는 경우 1일부터 다시 시작됩니다! )
        </p>
      </form>
    </div>
  );
}

function store05(state) {
  return {
    state: state.reducer7,
    state2: state.reducer6,
  };
}

export default connect(store05)(AskForm);
