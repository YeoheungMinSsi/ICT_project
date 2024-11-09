import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

// 이동할 페이지 목록
import Home from './component/Desk/Home';


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
