import React from 'react';
import { ListGroup } from 'react-bootstrap';

function EpigramList({ epigrams, onEpigramSelect }) {
  return (
    <div className="epigram-list">
      <h2>Epigramas</h2>
      <ListGroup>
        {epigrams.map(epigram => (
          <ListGroup.Item key={epigram} action onClick={() => onEpigramSelect(epigram)}>
            {epigram}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default EpigramList;
