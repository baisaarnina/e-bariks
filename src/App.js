import logo from '../src/assets/image/logo.png';
import './App.css';
import TopBar from './component/topbar';
import { Routes, Route } from 'react-router-dom';
import Introduksyon from './page/introduksyon';


function App() {
  return (
    <div className='App' style={{backgroundColor:'#FDE5D4'}}>
      <TopBar/>
      <Routes path='/' element={<Introduksyon/>}/> 
    </div>
  );
}

export default App;
