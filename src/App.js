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
import { createContext } from 'react';

export const MainContext = createContext()
function App() {
  const [formData, setFormData] = useState(null)
  const { isLogin } = rootStore
  return (
    <div className="App">
      <MainContext.Provider value={{ setFormData }} >

        <Header />
        <Routes>
          <Route path='/' element={isLogin ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path='/home' element={isLogin ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />

          <Route path='/about' element={<About />} />
          {/* <Route path='/*' element={<Navigate to="/" />} /> */}
        </Routes>
        {formData && <Form formData={formData} setFormData={setFormData} />}
      </MainContext.Provider>
    </div>
  );
}

export default observer(App);
