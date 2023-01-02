
import './App.css';
import {useState} from "react"

let title = 'Dockam 언제나옴?'
let styleObj = {
  color : 'green',
  fontSize : '40px'
}


function App() {
  let [coat, setCoat] = useState('남자 야상 추천');
  let [food, setFood] = useState('동래 맛집 추천');
  let [react, setReact] = useState('리액트 공부함');

  let [like, setLike] = useState(0)



  return (
    <div className="App">
      <div className='black_nav'>
        <h4>블로그</h4>
      </div>
      <h3 style= {styleObj}>{title}</h3>
      <div className='list'>
        <h4>
          { coat }
          <span onClick={() => {setLike(like + 1)}}>👍</span> {like}
        </h4>
        <p>22/02/17</p>
      </div>
      <div className='list'>
        <h4>
          { food }
          <span onClick={() => setCoat('여자 코트 추천')}>Click!</span> { 0 }
          </h4>
        <p>22/02/17</p>
      </div>
      <div className='list'>
        <h4>{ react }</h4>
        <p>22/02/17</p>
      </div>
      
    </div>
  );
}

export default App;
