import React from "react";
import ReactDOM, { render } from "react-dom/client";
// import ReactDOM, { render } from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
let basic = [
  {
    toggle: false,
    firstlogin: [],
    basicState: [],
    first: "first",
    saveData: "data",
  },
];

let toggle = [
  {
    noticeToggle: false,
    noAlarm: false,
    update: false,
    rankToggle: false,
    loginToggle: false,
  },
];

let todoTime = [
  {
    defaultTime: [],
    checkText: [],
  },
];

let emotion = [
  {
    profileEmotion: "id",
    emotionValue: ["1"],
  },
];

let countDay = [
  {
    day: [],
    day2: "day1",
    daytxt: "txt",
    dayText: [],
    dayDate: [],
    dayName: "date",
  },
];

function reducer(state = basic, action) {
  if (action.type === "할일쓰기창열기") {
    let copy = [...basic];
    copy[0].toggle = true;
    return copy;
  } else if (action.type === "할일쓰기창닫기") {
    let copy2 = [...basic];
    copy2[0].toggle = false;
    copy2[0].basicState.push(action.payload);
    localStorage.setItem(
      copy2[0].saveData,
      JSON.stringify(copy2[0].basicState)
    );
    return copy2;
  } else {
    return state;
  }
}

function reducer2(state = toggle, action2) {
  if (action2.type === "알림창열기") {
    let copy3 = [...toggle];
    copy3[0].noticeToggle = true;
    return copy3;
  } else if (action2.type === "알림창닫기") {
    let copy4 = [...toggle];
    copy4[0].noticeToggle = false;
    return copy4;
  } else {
    return state;
  }
}

function reducer3(state = todoTime, action3) {
  if (action3.type === "날짜전송") {
    let copy5 = [...todoTime];
    copy5[0].defaultTime.push(action3.payload2);
    return copy5;
  } else {
    return state;
  }
}

function reducer4(state = toggle, action4) {
  if (action4.type === "알림아이콘보기") {
    let copy6 = [...toggle];
    copy6[0].noAlarm = true;
    return copy6;
  } else if (action4.type === "알림아이콘끄기") {
    let copy8 = [...toggle];
    copy8[0].noAlarm = false;
    return copy8;
  } else {
    return state;
  }
}

function reducer5(state = todoTime, action5) {
  if (action5.type === "텍스트보내기") {
    let copy7 = [...todoTime];
    copy7[0].checkText.push(action5.payload3);
    return copy7;
  } else {
    return state;
  }
}
function reducer6(state = basic, action6) {
  if (action6.type === "첫로그인") {
    let copy7 = [...basic];
    copy7[0].firstlogin.unshift(action6.payload6);
    localStorage.setItem(copy7[0].first, JSON.stringify(copy7[0].firstlogin));
    return copy7;
  } else {
    return state;
  }
}

function reducer7(state = toggle, action7) {
  if (action7.type === "로그인성공") {
    let copy8 = [...toggle];
    copy8[0].update = true;
    return copy8;
  } else {
    return state;
  }
}
function reducer8(state = countDay, action8) {
  if (action8.type === "디데이전송") {
    let copy9 = [...countDay];
    copy9[0].dayDate.push(action8.payload8);
    console.log(copy9[0].dayDate);
    localStorage.setItem(copy9[0].dayName, JSON.stringify(copy9[0].dayDate));
    return copy9;
  } else {
    return state;
  }
}
function reducer9(state = countDay, action9) {
  if (action9.type === "예약일정내용전송01") {
    let copy10 = [...countDay];
    copy10[0].dayText.push(action9.payload9);
    console.log(copy10[0].dayText);
    localStorage.setItem(copy10[0].daytxt, JSON.stringify(copy10[0].dayText));
    return copy10;
  } else {
    return state;
  }
}
function reducer10(state = countDay, action10) {
  if (action10.type === "예약일정내용전송02") {
    let copy11 = [...countDay];
    copy11[0].day.push(action10.payload10);
    console.log(copy11[0].day);
    localStorage.setItem(copy11[0].day2, JSON.stringify(copy11[0].day));
    return copy11;
  } else {
    return state;
  }
}

function reducer11(state = toggle, action11) {
  if (action11.type === "내등급열기") {
    let copy12 = [...toggle];
    copy12[0].rankToggle = true;
    return copy12;
  } else if (action11.type === "내등급닫기") {
    let copy121 = [...toggle];
    copy121[0].rankToggle = false;
    return copy121;
  } else {
    return state;
  }
}

function reducer12(state = emotion, action12) {
  if (action12.type === "id값전송") {
    let copy13 = [...emotion];
    copy13[0].emotionValue.unshift(action12.payload12);
    localStorage.setItem(copy13[0].profileEmotion, copy13[0].emotionValue);
    return copy13;
  } else {
    return state;
  }
}

let store = createStore(
  combineReducers({
    reducer,
    reducer2,
    reducer3,
    reducer4,
    reducer5,
    reducer6,
    reducer7,
    reducer8,
    reducer9,
    reducer10,
    reducer11,
    reducer12,
  })
);
const rootNode = document.getElementById("root");
ReactDOM.createRoot(rootNode).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
