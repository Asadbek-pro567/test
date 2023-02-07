import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Glavniy from './pages/Glavniy/Glavniy';
import Login from './pages/Login/Login';
import Put from './pages/Put/Put';
import Result from './pages/Result/Result';
import Tests from './pages/Test/Tests';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(window.sessionStorage.getItem('key') == 'error'){
      navigate('/')
    }
  },[location.pathname])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Glavniy/>}/>
        <Route path='/put' element={<Put/>}>
          <Route path=':userId'/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/test' element={<Tests/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
