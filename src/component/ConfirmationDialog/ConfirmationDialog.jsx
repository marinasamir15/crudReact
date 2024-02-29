import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationDialog = ({ show, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationDialog;