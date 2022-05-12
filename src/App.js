import React, {useState,useEffect} from 'react';
import { Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';



function App() {
  return (
    <div className="App">
      <h1 className="title">오늘의 나</h1>
       <a href="#" className="btnCall">
            <span className="hide">메뉴호출</span>
        </a>
      <p className="txt">오늘의 나는</p>
      <strong>0%</strong>
    </div>
  )
}

export default App