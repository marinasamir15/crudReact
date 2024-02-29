import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditPostModal = ({ post, updatePost }) => {
  const [name, setName] = useState(post.name);
  const [image, setImage] = useState(post.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || image.trim() === '') {
      return;
    }
    updatePost({ id: post.id, name, image });
  };

  return (
    <Modal show={true} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditPostModal;