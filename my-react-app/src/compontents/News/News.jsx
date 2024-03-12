import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const userData = {};
        data.forEach(user => {
          userData[user.id] = user;
        });
        setUsers(userData);
      });
  }, []);

  return (
    <Box>
      <h1>Новостная лента</h1>
      {posts.map(post => (
        <Box key={post.id} marginBottom="50px">
          <Box borderBottom="3px solid black" marginBottom="10px" />
          <p marginBottom="5px">Автор: <span style={{textDecoration: "underline" }}> {users[post.userId] ? users[post.userId].name : 'Unknown'} </span> </p>
          <p>Имя пользователя: <span style={{textDecoration: "underline" }}> {users[post.userId] ? users[post.userId].username : 'Unknown'} </span> </p>
          <h3>Тема: {post.title}</h3>
          <p>Пост: {post.body}</p>
          <Link to={`/post/${post.id}`}>Подробнее</Link>
          <Box borderBottom="3px solid black" marginBottom="10px" />
        </Box>
      ))}
    </Box>
  );
};

export default Home;
