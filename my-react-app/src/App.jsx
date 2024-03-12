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
