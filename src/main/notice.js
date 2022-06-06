import React from "react";
import { connect } from "react-redux";
import "../css/notice.css";
function Notice(props) {
  return (
    <div className="notice_wrap">
      <div className="black_bg"></div>
      <aside>
        <div className="aside_header">
          <p className="noti_title">알림함</p>
          <img
            src="../btn_close.svg"
            onClick={() => {
              props.dispatch({ type: "알림창닫기" });
              props.dispatch({ type: "알림아이콘끄기" });
            }}
            alt="알림창 닫기"
          ></img>
        </div>
        <ul className="notice">
          {props.Time[0].defaultTime.map(function (a, i) {
            return (
              <li key={i}>
                <img src="../ico_checked.png" alt="스케줄 완료 표시"></img>
                <div>
                  <p className="notice_checktime">
                    {`${props.Time[0].defaultTime[i].year}-${
                      props.Time[0].defaultTime[i].mon < 10
                        ? "0" + props.Time[0].defaultTime[i].mon
                        : props.Time[0].defaultTime[i].mon
                    }-${
                      props.Time[0].defaultTime[i].date < 10
                        ? "0" + props.Time[0].defaultTime[i].date
                        : props.Time[0].defaultTime[i].date
                    }
                                      ${
                                        props.Time[0].defaultTime[i].hour < 10
                                          ? "0" +
                                            props.Time[0].defaultTime[i].hour
                                          : props.Time[0].defaultTime[i].hour
                                      }:${
                      props.Time[0].defaultTime[i].min < 10
                        ? "0" + props.Time[0].defaultTime[i].min
                        : props.Time[0].defaultTime[i].min
                    }:00`}
                  </p>
                  <p className="notice_todo">{props.Text[0].checkText[i]}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

function store03(state) {
  return {
    state: state.reducer2,
    Time: state.reducer3,
    Text: state.reducer5,
  };
}

export default connect(store03)(Notice);
