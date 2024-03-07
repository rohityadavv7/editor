
import './App.css';
import Home from './components/Home';
import MainEditor from './components/MainEditor';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App h-screen w-screen">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<MainEditor/>}/>
      </Routes>


    </div>
  );
}

export default App;
