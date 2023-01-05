
import './App.css';
import {useState} from "react"



function App() {
  
  let [title, setTitle] = useState(['노션 그래프화 하기', '갤럭시 폴드 5', '좌식의자 구매후기']);
  let [num, numCount] = useState([0,0,0]); 
  
  let [modal, setModal] = useState(true);


  function changeTitle(i) {
    let copy = [...title];
    copy[i] = '여자 코트 추천'
    setTitle(copy)

  }

  return (
    <div className="App">
      <div className='black_nav'>
        <h4>블로그</h4>
      </div>

    <button onClick={() => {
      let copy = [...title];
      setTitle(copy.sort())
      console.log(title)
    }}>
      정렬
    </button>
      {
        title.map(function(a, i) {
          return (

            <div className='list' key={i}>
            <h4 onClick={()=> {
              if(modal == false) {
                setModal(true)
              } else {
                setModal(false)
              }
            }}>
              { a }
              <span onClick={() => {
                let copy = [...num];
                copy[i] = copy[i] + 1;
                  numCount(copy)
                }}>👍</span> {num[i]}
            </h4>
            <p>2023/01/15</p>
          </div>
            )
        })
        
      }
      {
        modal ? <Modal 색="yellow" title={title} 제목변경={() => changeTitle(1)}></Modal> : <></>
      }
    </div>
  );
}


function Modal(props) {
  return (
    <div className='modal' style={{background : props.색}}>
      <h4>{props.title[0]}</h4>
      <p>2022/12/25</p>
      <p>상세 내용들</p>
      <button onClick={props.제목변경}>글수정</button>
    </div>
  )
}

export default App;
