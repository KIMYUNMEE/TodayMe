/*eslint-disable*/

import './App.css';
import React, { useEffect,useRef, useState } from 'react';

function App() {
    const [files, setFiles] = useState('');

    return (
      <div>
    <header>
        <h1>ZIP</h1>
        <a href="#" className="btnCall">
            <span>메뉴호출</span>
        </a>
    </header>
      </div>
    )

  }
export default App;