import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useScript } from "./main/hook";

import "./css/default.css";
import "./App.css";

import Header from "./common/header";
import Mypage from "./sub/mypage";
import AskForm from "./sub/login";
import Calendar from "./sub/calendar";
import Loading from "./sub/loading";
import Write from "./main/write";
import Profile from "./sub/profile";
import Footer from "./common/footer";
import Notice from "./main/notice";

function App(props) {
  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: "http://localhost:3000",
    });
  };
  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("358e7268eff844151f62ddafaa786729");
      }
    }
  }, [status]);
  let [loadingState, setLoading] = useState(false);

  let [ranking, setRanking] = useState(0);
  let [parcent, setParcent] = useState(0);
  let [addToggle, setAddToggle] = useState(false);
  let [reset, setReset] = useState(false);
  const user_name = "currentUser";
  let currentUser = localStorage.getItem(user_name);
  let [firstDay, setFirstDay] = useState(1);
  const rank = "ranking";
  let storeRank = localStorage.getItem(rank);
  const upTodo = localStorage.getItem(props.reducer[0].saveData);
  const upgradTodo = JSON.parse(upTodo);
  const parcent_name = "parcent";
  const upParcent = +localStorage.getItem(parcent_name);
  const upDay = localStorage.getItem(props.reducer7[0].first);
  const upgradDay = JSON.parse(upDay);

  var countDate = new Date();
  countDate.setHours(24, 0, 0, 0);

  return (
    <div className="App">
      {useEffect(() => {
        var moment = new Date();
        let start = new Date(
          upDay == null
            ? 0
            : `${upgradDay[0].findyear},${upgradDay[0].findmonth + 1},${
                upgradDay[0].findDay - 1
              }`
        );

        let difference = moment - start;
        let oneDay = 1000 * 60 * 60 * 24;
        let counte = Math.floor(difference / oneDay);
        let countDay = counte;
        setFirstDay(countDay);
      })}
      {useEffect(() => {
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      }, [])}
      {useEffect(() => {
        var timer = setInterval(function () {
          var moment = new Date().getTime();
          var difference = countDate - moment;

          var hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          var seconds = Math.floor((difference % (1000 * 60)) / 1000);
          if (difference === 0) {
            clearInterval(timer);
            setParcent(0);
            localStorage.removeItem("data");
            localStorage.removeItem("parcent");
          }
        }, 1000);
      }, [])}
      {useEffect(() => {
        setInterval(() => {
          var moment = new Date();
          let start = new Date(
            `${upgradDay[0].findyear},${upgradDay[0].findmonth + 1},${
              upgradDay[0].findDay - 1
            }`
          );
          var difference = moment - start;
          var oneDay = 1000 * 60 * 60 * 24;
          var counte = Math.floor(difference / oneDay);
          var countDay = counte;
          setFirstDay(countDay);
        }, 36000);
      }, [])}
      {useEffect(() => {
        upParcent == null ? setParcent(0) : setParcent(upParcent);
        storeRank == null ? setRanking(0) : setRanking(storeRank);
      }, [])}
      <Route exact path="/">
        {loadingState === false && props.reducer6[0].update === false ? (
          <Loading></Loading>
        ) : currentUser === null ? (
          <AskForm></AskForm>
        ) : (
          <div>
            <div className="wrap">
              <Header />
              <section className="section01">
                <div>
                  <div className="txt_wrap">
                    <p className="txt">오늘의 나는</p>
                    <p className="parcent">
                      {parcent > 100 ? setParcent(100) : parcent}%
                    </p>
                    <p className="caption">하루를 보내고 있습니다.</p>
                  </div>
                  {parcent === 0 ? (
                    <img
                      src="../main_img01.jpg"
                      alt="준비"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 25 ? (
                    <img
                      src="../main_img02.jpg"
                      alt="하는중"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 50 ? (
                    <img
                      src="../main_img03.jpg"
                      alt="하는중"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 75 ? (
                    <img
                      src="../main_img04.jpg"
                      alt="하는중"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 100 ? (
                    <img
                      src="../main_img05.jpg"
                      alt="하는중"
                      className="ico_img01"
                    ></img>
                  ) : (
                    <img
                      src="../main_img01.jpg"
                      alt="하는중"
                      className="ico_img01"
                    ></img>
                  )}
                </div>
                <div className="use_day">
                  <span className="member">{currentUser}</span>
                  <div className="member_caption">
                    님은 {firstDay}일째 알찬 하루를 사용중!!
                  </div>
                </div>
              </section>
              <section className="section02">
                <div>
                  <div className="article">
                    <p>오늘 할일</p>
                    <div>
                      <button onClick={handleKakaoButton} className="share">
                        공유하기
                      </button>
                      {reset === false ? (
                        <span
                          className="reset"
                          onClick={() => {
                            setAddToggle(true);
                            setReset(true);
                          }}
                        >
                          작성완료
                        </span>
                      ) : (
                        <span
                          className="reset"
                          onClick={() => {
                            localStorage.removeItem("data");
                            setReset(false);
                            setAddToggle(false);
                            localStorage.removeItem("parcent");
                            window.location.reload();
                          }}
                        >
                          초기화하기
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="list_tab">
                    <li>시간</li>
                    <li>할일</li>
                    <li>중요도</li>
                    <li>완료</li>
                  </ul>
                  {upTodo !== null
                    ? upgradTodo.map(function (a, i) {
                        return (
                          <div className="list" key={i}>
                            <ul>
                              <li>
                                <p className="today_date">
                                  {upgradTodo[i].writeH}:{upgradTodo[i].writeM}
                                </p>
                              </li>
                              <li>
                                <p className="today_txt">
                                  {upgradTodo[i].write}
                                </p>
                              </li>
                              <li>
                                <p className="today_best">
                                  {upgradTodo[i].writeI}
                                </p>
                              </li>
                              <li>
                                <button
                                  id={i}
                                  onClick={() => {
                                    var nowTime = new Date();

                                    var year = nowTime.getFullYear();
                                    var mon = nowTime.getMonth() + 1;
                                    var date = nowTime.getDate();
                                    var hour = nowTime.getHours();
                                    var min = nowTime.getMinutes();

                                    let DateFac = {
                                      year: year,
                                      mon: mon,
                                      date: date,
                                      hour: hour,
                                      min: min,
                                    };

                                    parcent >= 100
                                      ? setParcent(parcent)
                                      : setParcent(parcent + 25);
                                    localStorage.setItem(
                                      parcent_name,
                                      parcent + 25
                                    );
                                    props.dispatch({
                                      type: "날짜전송",
                                      payload2: DateFac,
                                    });
                                    props.dispatch({ type: "알림아이콘보기" });
                                    props.dispatch({
                                      type: "텍스트보내기",
                                      payload3: upgradTodo[i].write,
                                    });

                                    parcent === 50
                                      ? setRanking(Number(ranking) + 1)
                                      : setRanking(Number(ranking));

                                    localStorage.setItem(rank, ranking);

                                    const finded = document.querySelectorAll(
                                      ".section02 .list button"
                                    );
                                    const todayFind = document.querySelectorAll(
                                      ".section02 .list .today_date"
                                    );
                                    const todayFind1 =
                                      document.querySelectorAll(
                                        ".section02 .list .today_best"
                                      );
                                    const todayFind2 =
                                      document.querySelectorAll(
                                        ".section02 .list .today_txt"
                                      );
                                    finded[i].classList.add("off");
                                    todayFind[i].classList.add("op_off");
                                    todayFind1[i].classList.add("op_off");
                                    todayFind2[i].classList.add("op_off");
                                  }}
                                >
                                  <img
                                    src="../btn_complete.png"
                                    alt="check"
                                  ></img>
                                </button>
                              </li>
                            </ul>
                          </div>
                        );
                      })
                    : null}
                </div>
              </section>
              {props.reducer[0].toggle === true ? <Write></Write> : null}
            </div>
            <Footer addToggle={addToggle}></Footer>
            {props.reducer2[0].noticeToggle === true &&
            props.reducer4[0].noAlarm === true ? (
              <Notice upTodo={upTodo} upgradTodo={upgradTodo}></Notice>
            ) : null}
          </div>
        )}
      </Route>
      <Route exact path="/login">
        <AskForm></AskForm>
      </Route>
      <Route exact path="/calendar">
        <Calendar></Calendar>
      </Route>
      <Route exact path="/loading">
        <Loading></Loading>
      </Route>
      <Route exact path="/Mypage">
        <Mypage currentUser={currentUser} storeRank={storeRank}></Mypage>
      </Route>
      <Route exact path="/profile">
        <Profile></Profile>
      </Route>
    </div>
  );
}

function store01(state) {
  return {
    reducer: state.reducer,
    reducer2: state.reducer2,
    reducer3: state.reducer3,
    reducer4: state.reducer4,
    reducer5: state.reducer5,
    reducer6: state.reducer7,
    reducer7: state.reducer6,
  };
}

export default connect(store01)(App);
