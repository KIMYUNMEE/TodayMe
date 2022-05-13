import React, {useState,useEffect,useRef} from 'react';

function App() {
  const txt1 = useRef(null);
  const txt2 = useRef(null);
  const txt3 = useRef(null);
  const textarea = useRef(null);
  const updateInput = useRef(null);
  const updateNum = useRef(null);
  const updateNum2 = useRef(null);
  const updateTextarea = useRef(null);
  const showBox = useRef(null);
 
  const getLocalItems = () => {
    let data = localStorage.getItem('posts');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  const [posts, setPosts] = useState(getLocalItems);
  let [modal, setModal] = useState(false);

  const createPost = () => {
    if (!txt1.current.value || !textarea.current.value || !txt2.current.value || !txt3.current.value) {
      alert('제목과 본문을 입력하세요');
      return;
    }
    setPosts([
      { title: txt1.current.value, content: textarea.current.value, time: txt2.current.value, time2: txt3.current.value }, ...posts
    ]);
    txt1.current.value = '';
    txt2.current.value = '';
    txt3.current.value = '';
    textarea.current.value = '';
  }
  
  const deletePost = index => {
    setPosts(
      posts.filter((_, postIndex) => postIndex !== index)
    )
  }


  const enableUpdate = index => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = true;
        return post;
      })
    )
  }
  const disableUpdate = index => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = false;
        return post;
      })
    )
  }
  const updatePost = index => {
    if (!updateInput.current.value || !updateTextarea.current.value || !updateNum.current.value || !updateNum2.current.value) {
      alert('수정할 제목과 본문을 모두 입력하세요.');
      return;
    }
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) {
          post.title = updateInput.current.value;
          post.time = updateNum.current.value;
          post.time2 = updateNum2.current.value;
          post.content = updateTextarea.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    )
  }
  

  return (
    <div className="App">
      <header>
        <h1 className="title">오늘의 나</h1>
        <a href="#" className="btnCall">
          <span className="hide">메뉴호출</span>
        </a>
      </header>
      <div className="txt_wrap">
        <p className="txt">오늘의 나는</p>
       
          
        <p>하루를 보내고 있습니다.</p>
        <img src="./People_47_B.jpg" alt="캐릭터사진" className="icon" />
        <input type="text"></input><span>님은 <em>1</em>일째 알찬 하루를 보내는중!</span>
      </div>
      <section className="inputBox">
        <input
          type="text"
          placeholder='제목을 입력하세요'
          ref={txt1} className="txt1"
        /><br />
        <input
          type="number"
          className="txt2"
          placeholder='시간을 입력하세요'
          ref={txt2}
        /><br />
        <input
          type="number"
          className="txt3"
          placeholder='시간을 입력하세요'
          ref={txt3}
        /><br />
        <textarea
          cols="30" rows="5"
          placeholder='본문을 입력하세요'
          ref={textarea}
        >
        </textarea><br />
        <button onClick={() => {
          txt1.current.value = '';
          txt2.current.value = '';
          txt3.current.value = '';
          textarea.current.value = '';
        }}>cancel</button>
        <button onClick={createPost}>create</button>
      </section>
      <section className="showBox" ref={showBox}>
        {
          posts.map((post, index) => {
            return (
              <article key={index}>
                {
                  post.enableUpdate
                    ?
                    // 수정모드
                    <>
                      <div className="post">
                        <input type="text" defaultValue={post.title} ref={updateInput} /><br />
                        <input type="number" defaultValue={post.txt2} ref={updateNum} /><br />
                        <input type="number" defaultValue={post.txt3} ref={updateNum2} /><br />
                        <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                      </div>
                      <ul className="btns">
                        <li className="update" onClick={() => updatePost(index)}>입력</li>
                        <li className="delete" onClick={() => disableUpdate(index)}>취소</li>
                      </ul>
                    </>
                    :
                    // 출력모드
                    <>
                      <div className="post">
                        <h2>{post.title}</h2>
                        <span>{post.time}</span><br />
                        <span>{post.time2}</span>
                        <p>{post.content}</p>
                      </div>
                      <ul className="btns">
                        <li className="update" onClick={() => enableUpdate(index)}>수정</li>
                        <li className="delete" onClick={() => deletePost(index)}>삭제</li>
                      </ul>
                    </>
                }
              </article>
            )
          })
        }
      </section>
      <footer>
        <button onClick={() => { setModal(!modal) }} className="123" >작성하기 </button>
 
        {
          modal === true ? <Modal></Modal> : null
        }
        <ul>
          <li><a href="#" alt="메뉴바">홈</a></li>
          <li><a href="#" alt=""></a></li>
          <li><a href="#" alt="">기록하기</a></li>
        </ul>
      </footer> 
    </div>
  )

}
function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App