
import './App.css';
import {useState} from "react"

let titlet = 'Dockam 안나옴'
let styleObj = {
  color : 'green',
  fontSize : '40px'
}


function App() {
  let [coat, setCoat] = useState('남자 야상 추천');
  let [food, setFood] = useState('동래 맛집 추천');
  let [react, setReact] = useState('리액트 공부함');

  let [like, setLike] = useState(0)

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



      <h3 style= {styleObj}>{titlet}</h3>
      <div className='list'>
        <h4>
          { title[0] }
          <span onClick={() => {setLike(like + 1)}}>👍</span> {like}
        </h4>
        <p>22/02/17</p>
      </div>
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
      
    </div>
  );
}

export default App;
