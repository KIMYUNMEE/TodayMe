import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../css/default.css";
import "../css/calendar.css";
import "../css/index.css";
import Header from "../common/sub_header";
import Footer from "../common/footer";
function Calendar12(props) {
  const [value, onChange] = useState(new Date());
  let history = useHistory();
  const [value1, onChange1] = useState(
    localStorage.getItem(props.state2[0].daytxt)
  );
  console.log(value1);
  const upDate = localStorage.getItem(props.state[0].dayName);
  const upgradDate = JSON.parse(upDate);
  const upTxt = localStorage.getItem(props.state2[0].daytxt);
  const upgradTxt = JSON.parse(upTxt);
  const upday = localStorage.getItem(props.state3[0].day2);
  const upgradday = JSON.parse(upday);
  let CalendarToday = new Date();
  // let dday = new Array();
  let box = new Array();
  upDate === null
    ? console.log("실패")
    : upgradDate.map((a) => {
        box.push(new Date(a));
      });
  let gap = box.map(function (time, indexs) {
    return box[indexs].getTime() - CalendarToday.getTime();
  });
  let TimeResult = gap.map(function (dated, indexed) {
    return Math.ceil(gap[indexed] / (1000 * 60 * 60 * 24));
  });
  const deletePost = (index) => {
    onChange1(value1.filter((_, postIndex) => postIndex !== index));
  };
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <p className="todays">TODAY</p>
      <p className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </p>
      <Calendar
        onChange={(date) => onChange(date)}
        selected={value}
        id="box_calendar"
      />

      <section className="important_data">
        <div className="title_wrap">
          <div className="date_title">예약하고 싶은 일정</div>
          {upTxt !== null
            ? upgradTxt.map(function (a, i) {
                let html = [];
                html.push(<p className="dot"></p>);

                return (
                  <div className="date_wrap" key={i}>
                    {html}
                    <p>{upgradDate[i]}</p>
                    <p className="date_txt">
                      <p>{upgradTxt[i]}</p>
                    </p>
                    <p className="date_btn">
                      {isNaN(TimeResult[i])
                        ? ""
                        : TimeResult[i] < 0
                        ? `D+${TimeResult[i]}`.replace("-", "")
                        : `D-${TimeResult[i]}`}
                    </p>
                  </div>
                );
              })
            : null}

          <DatePicker
            todayButton="Vandaag"
            onChange={(date) => onChange(date)}
            selected={value}
            id="box_calendar"
          />
          <input id="input_todo"></input>
          <div className="btn_todo">
            <button
              className="btn_write"
              onClick={() => {
                let click_date = document.getElementById("box_calendar").value;
                let todo_text = document.getElementById("input_todo").value;
                props.dispatch({ type: "디데이전송", payload8: click_date });
                props.dispatch({
                  type: "예약일정내용전송02",
                  payload10: todo_text,
                });
                todo_text === ""
                  ? alert("내용을입력하세요")
                  : props.dispatch({
                      type: "예약일정내용전송01",
                      payload9: todo_text,
                    });
              }}
            >
              작성
            </button>
            <button
              className="btn_reset"
              onClick={() => {
                localStorage.removeItem("date");
                localStorage.removeItem("txt");
                localStorage.removeItem("day1");
                history.push("/");
              }}
            >
              초기화
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

function store04(state) {
  return {
    state: state.reducer8,
    state2: state.reducer9,
    state3: state.reducer10,
  };
}

export default connect(store04)(Calendar12);
