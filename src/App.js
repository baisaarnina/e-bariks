import logo from '../src/assets/image/logo.png';
import './App.css';
import Home from './page/home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
