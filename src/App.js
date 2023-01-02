//import logo from './logo.svg';
import './App.css';

let title = 'aaaaaaaaaaaaa'
let styleObj = {
  color : 'red',
  fontSize : '40px'
}

function App() {
  return (
    <div className="App">
      <div className='black_nav'>
        <h4>블로그</h4>
      </div>
      <h3 style= {styleObj}>{title}</h3>
    </div>
  );
}

export default App;
