import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import Signup from './component/signup';

import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login />}></Route>
      <Route exact path='/signup' element={<Signup />}></Route>
    </Routes>

   </BrowserRouter>
    </div>
  );
}

export default App;
