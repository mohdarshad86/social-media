import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import ErrorPage from './Screens/errorPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className='route'>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='signup' element={<SignUp />} />

            <Route path='home' element={<Home />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
