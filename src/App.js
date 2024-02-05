import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/admin/sigin';
import Umidjon from './components/baner';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='happy_birthday' element={<Umidjon/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
