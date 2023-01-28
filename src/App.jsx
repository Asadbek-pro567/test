import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Result from './pages/Result/Result';
import Tests from './pages/Test/Tests';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/test' element={<Tests/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
