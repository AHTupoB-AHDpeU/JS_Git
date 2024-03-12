import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const PostPage = () => {
  const {postId} = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId, post?.userId]);

  if (!post || !user) {
    return <Text></Text>;
  }

  // значения отступа и размера не меняются???
  return (
    <Box p="4">
      <Text mt="1" fontSize="lg">Автор: <span style={{ textDecoration: "underline" }}>{user.name}</span> Имя пользователя: <span style={{ textDecoration: "underline" }}>{user.username}</span></Text>
      <Text fontSize="xl" fontWeight="bold">Тема: {post.title}</Text>
      <Text mt="4">Пост: {post.body}</Text>
      <Text mt="4" fontWeight="bold" textDecoration="underline">Комментарии:</Text>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Text fontSize="sm" fontWeight="bold">{comment.name}</Text>
            <Text mt="0" color="blue" fontWeight="bold">{comment.body}</Text>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default PostPage;
