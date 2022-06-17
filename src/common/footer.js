import { React } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "../css/default.css";
import "../css/index.css";

function Footer(props) {
  let history = useHistory();

  return (
    <footer className="footer_bar">
      <ul>
        <li>
          <a
            href=""
            alt="돌아가기"
            onClick={() => {
              history.push("/");
            }}
          >
            홈
          </a>
        </li>
        <li>
          {props.addToggle === false ? (
            <button
              onClick={() => {
                props.dispatch({ type: "할일쓰기창열기" });
              }}
            ></button>
          ) : null}
        </li>
        <li>
          <a
            href=""
            alt="기록하기"
            onClick={() => {
              history.push("/calendar");
            }}
          >
            기록하기
          </a>
        </li>
      </ul>
    </footer>
  );
}

function store11(state) {
  return {
    state: state.reducer,
  };
}

export default connect(store11)(Footer);
