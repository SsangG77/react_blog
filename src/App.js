
import './App.css';
import {useState} from "react"



function App() {
  


  let [title, setTitle] = useState(['노션 그래프화 하기', '갤럭시 폴드 5', '좌식의자 구매후기']);
  let [num, numCount] = useState([0,0,0]); 
  let [num1, numCount1] = useState(0)
  let [num2, numCount2] = useState(0)


  let [total, totalCount] = useState([0,0,0])

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

      {/* <h3 style= {styleObj}>{titlet}</h3>
      <Write/>
      <div className='list'>
        <h4>
          { title[1] }
          <span onClick={() => setCoat('여자 코트 추천')}> Click!</span> { 0 }
          </h4>
        <p>22/02/17</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>22/02/17</p>
      </div>

      <Modal/> */}

      {
    //     <>
    //     <div className='list'>
    //       <h4>
    //         {title[0]}
    //         <span onClick={() => {numCount(num + 1)}}>👍 {num}</span>
    //       </h4>
    //     </div>
    //     <div className='list'>
    //     <h4>
    //       {title[1]}
    //       <span onClick={() => {numCount1(num1 + 1)}}>👍 {num1}</span>
    //     </h4>
    //   </div>
    //   <div className='list'>
    //   <h4>
    //     {title[2]}
    //     <span onClick={() => {numCount2(num2 + 1)}}>👍 {num2}</span>
    //   </h4>
    // </div>
    //     </>
      }
      {
        title.map(function(a, i) {
          return (

            <div className='list' key={i}>
            <h4>
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
      
    </div>
  );
}





export default App;
