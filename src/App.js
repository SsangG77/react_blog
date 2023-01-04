
import './App.css';
import {useState} from "react"



function App() {
  let [like, setLike] = useState([0,0,0])
  console.log(like)


  let [title, setTitle] = useState(['노션 그래프화 하기', '갤럭시 폴드 5', '좌식의자 구매후기']);

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
        title.map((name, i) => {
          return (
            <div className='list' key={i}>
               <h4>
                { name }
                <span onClick={() => {
                  setLike(like.map((a) => {
                    
                    return a + 1
                  }))
                }}>👍 {like[i]}</span>
                </h4>
               <p>22/02/17</p>
             </div>
          )
        })
      }
      
    </div>
  );
}





export default App;
