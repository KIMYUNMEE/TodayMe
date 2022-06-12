import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/write.css";
import "../css/index.css";
function Writeform(props) {
  let [post, setPost] = useState([]);
  let [postText, setPostText] = useState([]);
  let [postTime, setPostTime] = useState([]);
  let [postEmotion, setPostEmotion] = useState([]);

  return (
    <div className="write">
      <b>오늘의 내가 해야할 일</b>
      <input
        className="text_area"
        placeholder="내가 해야할 일"
        onChange={(e) => {
          setPost(e.target.value);
        }}
      ></input>
      <div className="date">
        <p className="day">시간</p>
        <form className="time_wrap" autoComplete="off">
          <input
            className="time_txt"
            placeholder="00"
            maxLength="2"
            type="number"
            min="00"
            max="24"
            onChange={(e) => {
              setPostText(e.target.value);
              setPostTime("00");
            }}
          ></input>
          <input
            className="time_txt"
            placeholder="00"
            type="number"
            maxLength="2"
            min="00"
            max="60"
            onChange={(e) => {
              setPostTime(e.target.value);
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
              name="emotion"
              onChange={(e) => {
                setPostEmotion(e.target.value);
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
              name="emotion"
              onChange={(e) => {
                setPostEmotion(e.target.value);
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
              name="emotion"
              value="적게🤔"
              onChange={(e) => {
                setPostEmotion(e.target.value);
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
              name="emotion"
              value="없음🤢"
              onChange={(e) => {
                setPostEmotion(e.target.value);
              }}
            ></input>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          let arrayWrite = [...post];
          arrayWrite.unshift(post);
          setPost(arrayWrite);
          let arrayH = [...postText];
          arrayH.unshift(postText);
          setPostText(arrayH);
          let arrayM = [...postTime];
          arrayM.unshift(postTime);
          setPostTime(arrayM);
          let arrayI = [...postEmotion];
          arrayI.unshift(postEmotion);
          setPostEmotion(arrayI);
          let input_form = document.querySelector(".text_area").value;
          let input_form2 = document.querySelector(".time_txt").value;
          let input_form3 = document.querySelector(
            ".text_area1_wrap li .text_area1"
          ).value;
          let write_form = {
            post: post,
            postText: postText,
            postTime: postTime,
            postEmotion: postEmotion,
          };
          input_form === "" || input_form2 === "" || input_form3 === ""
            ? alert("모두 다 입력해주세요")
            : props.dispatch({ type: "할일쓰기창닫기", payload: write_form });
        }}
        className="register"
      >
        등록하기
      </button>

      <button
        className="close"
        onClick={() => {
          let write_form = {
            post: post,
            postText: postText,
            postTime: postTime,
            postEmotion: postEmotion,
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
