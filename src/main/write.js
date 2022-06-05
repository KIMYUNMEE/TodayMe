import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/write.css";
function Writeform(props) {
  let [write, setwrite] = useState([]);
  let [writeH, setHwrite] = useState([]);
  let [writeM, setMwrite] = useState([]);
  let [writeI, setIwrite] = useState([]);

  return (
    <div className="editor">
      <b>오늘의 내가 해야할 일</b>
      <input
        className="text_area"
        placeholder="내가 해야할 일"
        onChange={(e) => {
          setwrite(e.target.value);
        }}
      ></input>

      <div className="date">
        <p className="day">시간</p>
        <form className="time_wrap" autoComplete="off">
          <input
            className="time_txt hour"
            placeholder="00"
            maxLength="2"
            type="number"
            min="00"
            max="24"
            onChange={(e) => {
              setHwrite(e.target.value);
              setMwrite("00");
            }}
          ></input>
          <input
            className="time_txt minute"
            placeholder="00"
            type="number"
            maxLength="2"
            min="00"
            max="60"
            onChange={(e) => {
              setMwrite(e.target.value);
            }}
          ></input>
        </form>
        <p className="day">얼마나 중요한가요?</p>
        <ul className="text_area1_wrap">
          <li>
            <label htmlFor="rad_01">제일😍</label>
            <input
              className="text_area1"
              id="rad_01"
              placeholder="중요도"
              type="radio"
              value="제일😍"
              onChange={(e) => {
                setIwrite(e.target.value);
              }}
            ></input>
          </li>
          <li>
            <label htmlFor="rad_02">많이😊</label>
            <input
              className="text_area1"
              id="rad_02"
              placeholder="중요도"
              type="radio"
              value="많이😊"
              onChange={(e) => {
                setIwrite(e.target.value);
              }}
            ></input>
          </li>
          <li>
            <label htmlFor="rad_03">적게🤔</label>
            <input
              className="text_area1"
              id="rad_03"
              placeholder="중요도"
              type="radio"
              value="적게🤔"
              onChange={(e) => {
                setIwrite(e.target.value);
              }}
            ></input>
          </li>
          <li>
            <label htmlFor="rad_04">없음🤢</label>
            <input
              className="text_area1"
              id="rad_04"
              placeholder="중요도"
              type="radio"
              value="없음🤢"
              onChange={(e) => {
                setIwrite(e.target.value);
              }}
            ></input>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          let arrayWrite = [...write];
          arrayWrite.unshift(write);
          setwrite(arrayWrite);

          let arrayH = [...writeH];
          arrayH.unshift(writeH);
          setHwrite(arrayH);

          let arrayM = [...writeM];
          arrayM.unshift(writeM);
          setMwrite(arrayM);
          let arrayI = [...writeI];
          arrayI.unshift(writeI);
          setIwrite(arrayI);

          let input_form = document.querySelector(".text_area").value;
          let input_form2 = document.querySelector(".time_txt").value;
          let input_form3 = document.querySelector(
            ".text_area1_wrap li .text_area1"
          ).value;

          let write_form = {
            write: write,
            writeH: writeH,
            writeM: writeM,
            writeI: writeI,
          };

          input_form === "" || input_form2 === "" || input_form3 === ""
            ? alert("모두 다 입력해주세요")
            : props.dispatch({ type: "할일쓰기창닫기", payload: write_form });
        }}
      >
        등록하기
      </button>

      <button
        className="close write"
        onClick={() => {
          let write_form = {
            write: write,
            writeH: writeH,
            writeM: writeM,
            writeI: writeI,
          };
          props.dispatch({ type: "할일쓰기창닫기", payload: write_form });
        }}
      >
        닫기
      </button>
    </div>
  );
}

function store02(state) {
  return {
    reducer: state.reducer,
  };
}

export default connect(store02)(Writeform);
