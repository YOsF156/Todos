import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import { observer } from 'mobx-react';
import rootStore from './stores/main';
import Form from './components/AddTask/Form';


function App() {
  const { isLogin } = rootStore
  // const [isLogin, setIsLogin] = useState("43")
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={isLogin ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        {isLogin ? <Route path='/home' element={<Home />} /> :
          <Route path='/login' element={<Login />} />
        }
        <Route path='/about' element={<About />} />

        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Form />
    </div>
  );
}

export default observer(App);
