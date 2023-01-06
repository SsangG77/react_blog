
import './App.css';
import {useState} from "react"



function App() {
  
  let [titles, setTitles] = useState(['노션 그래프화 하기', '갤럭시 폴드 5', '좌식의자 구매후기']);
  let [num, numCount] = useState([0,0,0]); 
  
  let [modal, setModal] = useState(false);
  
  let [title, setTitle] = useState("");
  let [input, setInput] = useState("");


  return (
    <div className="App">
      <div className='black_nav'>
        <h4>블로그</h4>
      </div>

      {
        titles.map(function(a, i) {
          return (

            <div className='list' key={i}>
            <h4 onClick={()=> {
              if(modal == false) {
                setModal(true)
                setTitle(titles[i])
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
            <button onClick={()=>{
              let copy = [...titles];
              copy.splice(i, 1)
              setTitles(copy);
            }}>삭제</button>
            <p>2023/01/15</p>
          </div>
            )
        })
        
      }

      <input type="text" onChange={(e)=> { 
        setInput(e.target.value)
        console.log(e.target.value)
        }}></input>
        <button onClick={() => {
          let text = input;
          let copy = [...titles];
          
          copy[copy.length] = text;
          console.log(copy);
          setTitles(copy);
          // setTitles[copy];
        }}>글추가</button>
      {
        modal ? <Modal 색="green" title={title}></Modal> : <></>
      }
    </div>
  );
}


function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title}</h4>
      <p>2022/12/25</p>
      <p>상세 내용들</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
