import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function WordDetailModal({ show, onHide, word }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de la Palabra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Aquí puedes agregar información sobre la palabra: {word}</p>
        {/* Agrega análisis gramatical, significado, etc. */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WordDetailModal;
