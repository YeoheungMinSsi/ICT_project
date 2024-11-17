import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

// 이동할 페이지 목록
import Home from './component/Desk/Home';
import Drink from './component/Desk/Drink/Drink';
import Tradition from './component/Desk/Tradition/component/Tradition';
import AllTraditionDrinks from './component/Desk/Tradition/component/traditionDrinks/AllTraditionDrinks';
import Glass from './component/Desk/Glass/Glass';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drink" element={<Drink />} />
            <Route path="/tradition" element={<Tradition />} />
            <Route path="/tradition/tradition-drinks" element={<AllTraditionDrinks />} />
            <Route path="/glass" element={<Glass />} />
        </Routes>
    </div>
  );
}

export default App;
