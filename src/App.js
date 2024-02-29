import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PostForm from './component/PostForm/PostForm';
import PostList from './component/PostList/PostList';
import EditPostModal from './component/EditPostModel/EditPostModel';
import ConfirmationDialog from './component/ConfirmationDialog/ConfirmationDialog';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://api.example.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addPost = async (newPost) => {
    try {
      const response = await axios.post('https://api.example.com/posts', newPost);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (updatedPost) => {
    try {
      await axios.put(`https://api.example.com/posts/${updatedPost.id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === updatedPost.id ? { ...post, ...updatedPost } : post))
      );
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://api.example.com/posts/${postId}`);
      setPosts(posts.filter((post) => post.id !== postId));
      setShowConfirmation(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>CRUD App</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <PostForm addPost={addPost} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <PostList posts={posts} />
        </Col>
      </Row>
      {showModal && (
        <EditPostModal post={selectedPost} updatePost={updatePost} />
      )}
      {showConfirmation && (
        <ConfirmationDialog
          show={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={() => deletePost(selectedPost.id)}
        />
      )}
    </Container>
  );
};

export default App;