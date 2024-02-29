import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ addPost }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || image.trim() === '') {
      return;
    }
    addPost({ name, image });
    setName('');
    setImage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Post
      </Button>
    </Form>
  );
};

export default PostForm;