import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './welcome/welcome.jsx';
import Login from './Login/register.jsx';
import Register from './Register/register.jsx';
import Catalog from './Catalog/Catalog.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element = {<Welcome />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='catalog' element={<Catalog />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
