import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compontents/News/News';
import PostPage from './compontents/Post/Post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
//import logo from './logo.svg';
import './App.css';
import { PageLayout } from './compontents/Layout/Layout';
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Home } from './compontents/Home/Home';


function App() {

  const isAdmin = (element) => element
  return (

    <Routes>

      <Route path='/*' element={isAdmin(<PageLayout />)} >
        <Route index element={<Home />} />
        <Route path='user' element={<>user</>} />
        <Route path='*' />
      </Route>

      <Route path='/auth/'  >
        {//<Route index element={<HomeCompnonent posts={data || []} />} /> 
        }
        <Route path='login' element={<LoginPage />} />
        <Route path='reg' element={<RegisterPage />} />
        {//<Route path='resetpassword' element={<>user</>} /> 
        }
      </Route>

      <Route path='/error/' element={<PageLayout />} >
        <Route index element={<>У вас нет роли администратора</>} />
      </Route>

    </Routes>
  );
}

export default App;
*/
