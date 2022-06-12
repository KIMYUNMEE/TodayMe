import React, { useState, useEffect, useRef } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useScript } from "./main/hook";

import "./css/default.css";
import "./App.css";

import Header from "./common/header";
import Mypage from "./sub/mypage";
import LoginForm from "./sub/login";
import Calendar from "./sub/calendar";
import Loading from "./sub/loading";
import Write from "./main/write";
import Profile from "./sub/profile";
import Footer from "./common/footer";
import Notice from "./main/notice";
const arr = ["white", "black", "blue", "green"];
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
  const input = useRef(null);
  const input1 = useRef(null);
  const input2 = useRef(null);
  const textarea = useRef(null);

  const updateInput = useRef(null);
  const updateTextarea = useRef(null);

  const updateTextarea2 = useRef(null);

  var countDate = new Date();
  countDate.setHours(24, 0, 0, 0);
  const getLocalItems = () => {
    let data = localStorage.getItem("posts");

    if (data) {
      return JSON.parse(data);
    } else {
      return [
        {
          title: "Hello0",
          content: "Here comes description in detail.",
          emo: "웃다",
          emo1: "웃다",
          emo2: "웃다",
        },
        {
          title: "Hello1",
          content: "Here comes description in detail.",
          emo: "웃다",
          emo1: "웃다",
          emo2: "웃다",
        },
        {
          title: "Hello2",
          content: "Here comes description in detail.",
          emo: "웃다",
          emo1: "웃다",
          emo2: "웃다",
        },
        {
          title: "Hello3",
          content: "Here comes description in detail.",
          emo: "웃다",
          emo1: "웃다",
          emo2: "웃다",
        },
      ];
    }
  };

  const [posts, setPosts] = useState(getLocalItems);
  const createPost = () => {
    let ab1 = document.querySelector(".abc").value;
    let ab = document.querySelector(".text_area1").value;
    if (!input.current.value || !textarea.current.value) {
      alert("제목과 본문을 입력하세요");
      return;
    }
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value,
        emo: ab,
        emo1: input1.current.value,
        emo2: input2.current.value,
        radio: ab1,
      },
      ...posts,
    ]);
    input.current.value = "";
    input1.current.value = "";
    input2.current.value = "";
    textarea.current.value = "";

    ab1 = "";
    ab = "";
  };
  const deletePost = (index) => {
    setPosts(posts.filter((_, postIndex) => postIndex !== index));
  };

  const enableUpdate = (index) => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = true;
        return post;
      })
    );
    console.log(posts);
  };
  const disableUpdate = (index) => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = false;
        return post;
      })
    );
    console.log(posts);
  };

  const updatePost = (index) => {
    if (!updateInput.current.value || !updateTextarea.current.value) {
      alert("수정할 제목과 본문을 모두 입력하세요.");
      return;
    }
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) {
          post.title = updateInput.current.value;
          post.content = updateTextarea.current.value;
          post.emo = updateTextarea2.current.value;

          post.enableUpdate = false;
        }
        return post;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  return (
    <div className="App">
      <input type="text" placeholder="제목을 입력하세요" ref={input} />
      <br />
      <input
        className="time_txt"
        placeholder="00"
        maxLength="2"
        type="number"
        min="00"
        max="24"
        ref={input1}
      ></input>
      <input
        className="time_txt"
        placeholder="00"
        type="number"
        maxLength="2"
        min="00"
        max="60"
        ref={input2}
      ></input>
      <textarea
        cols="30"
        rows="5"
        placeholder="질문하고자 하는 내용을 입력하세요"
        ref={textarea}
      ></textarea>
      {arr.map((color) => (
        <input type="radio" name="colors" value={color} className="abc" />
      ))}
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
              setPosts([
                {
                  emo: e.current.value,
                },
                ...posts,
              ]);
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
              setPosts([
                {
                  emo: e.current.value,
                },
                ...posts,
              ]);
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
              setPosts([
                {
                  emo: e.current.value,
                },
                ...posts,
              ]);
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
              setPosts([
                {
                  emo: e.current.value,
                },
                ...posts,
              ]);
            }}
          ></input>
        </li>
      </ul>
      <button onClick={createPost}>create</button>

      {posts.map((post, index) => {
        return (
          <article key={index}>
            {post.enableUpdate ? (
              // 수정모드
              <>
                <div className="post">
                  <input
                    type="text"
                    defaultValue={post.title}
                    ref={updateInput}
                  />
                  <br />
                  <textarea
                    defaultValue={post.content}
                    ref={updateTextarea}
                  ></textarea>
                </div>
                <ul className="btns">
                  <li onClick={() => updatePost(index)}>입력</li>
                  <li onClick={() => disableUpdate(index)}>취소</li>
                </ul>
              </>
            ) : (
              // 출력모드
              <>
                <div className="post">
                  <strong className="abcd">{post.title}</strong>
                  <p className="efg">{post.content}</p>
                  <p>{post.emo1}</p>

                  {post.emo2 === "" ? "00" : post.emo2}
                  <p>{post.emo}</p>
                  <p>{post.radio}</p>
                </div>
                <ul className="btns">
                  <li onClick={() => enableUpdate(index)}>수정</li>
                  <li onClick={() => deletePost(index)}>삭제</li>
                  <li>
                    <button
                      id={index}
                      onClick={() => {
                        var nowTime = new Date();

                        var year = nowTime.getFullYear();
                        var mon = nowTime.getMonth() + 1;
                        var date = nowTime.getDate();
                        var hour = nowTime.getHours();
                        var min = nowTime.getMinutes();

                        let ymdInfo = {
                          year: year,
                          mon: mon,
                          date: date,
                          hour: hour,
                          min: min,
                        };

                        parcent >= 100
                          ? setParcent(parcent)
                          : setParcent(parcent + 25);
                        localStorage.setItem(parcent_name, parcent + 25);

                        props.dispatch({ type: "알림아이콘보기" });
                        props.dispatch({
                          type: "텍스트보내기",
                          payload3: posts[index].title,
                        });

                        parcent === 50
                          ? setRanking(Number(ranking) + 1)
                          : setRanking(Number(ranking));

                        localStorage.setItem(rank, ranking);
                        props.dispatch({
                          type: "날짜전송",
                          payload2: ymdInfo,
                        });
                        const txt01 = document.querySelectorAll(".btns button");
                        const txt011 = document.querySelectorAll(".post .abcd");

                        const txt02 = document.querySelectorAll(".post .efg");

                        txt01[index].classList.add("off");
                        txt011[index].classList.add("op_off");
                        txt02[index].classList.add("op_off");
                      }}
                    >
                      <img src="../btn_complete.png" alt="check"></img>
                    </button>
                  </li>
                </ul>
              </>
            )}
          </article>
        );
      })}

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
          <LoginForm></LoginForm>
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
                      alt="메인이미지01"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 25 ? (
                    <img
                      src="../main_img02.jpg"
                      alt="메인이미지02"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 50 ? (
                    <img
                      src="../main_img03.jpg"
                      alt="메인이미지03"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 75 ? (
                    <img
                      src="../main_img04.jpg"
                      alt="메인이미지04"
                      className="ico_img01"
                    ></img>
                  ) : parcent === 100 ? (
                    <img
                      src="../main_img05.jpg"
                      alt="메인이미지05"
                      className="ico_img01"
                    ></img>
                  ) : (
                    <img
                      src="../main_img01.jpg"
                      alt="메인이미지01"
                      className="ico_img01"
                    ></img>
                  )}
                </div>
                <div className="use_day">
                  <span className="member">{currentUser}</span>
                  <div className="member_caption">
                    님은 {firstDay}일째 알찬 하루를 사용중!!
                  </div>
                  {arr.map((color) => (
                    <input
                      type="radio"
                      name="colors"
                      value={color}
                      className="abc"
                      onChange={() => {}}
                    />
                  ))}
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
        <LoginForm></LoginForm>
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
