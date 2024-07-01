import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import WordDetailModal from './WordDetailModal';
import WordFrequencyChart from './WordFrequencyChart';

function EpigramDetail({ epigram }) {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  return (
    <>
      <Card className="epigram-detail">
        <Card.Body>
          <Card.Title>Detalles del Epigrama</Card.Title>
          {epigram.processed_lines.map(line => (
            <Card.Text key={line.line}>
              <strong>{line.line}:</strong> {line.words.map((word, index) => (
                <span key={index} onClick={() => handleWordClick(word)} style={{ cursor: 'pointer', color: 'blue' }}>
                  {word}{' '}
                </span>
              ))}
            </Card.Text>
          ))}
          <WordFrequencyChart epigram={epigram} />
        </Card.Body>
      </Card>
      {selectedWord && (
        <WordDetailModal
          show={!!selectedWord}
          onHide={() => setSelectedWord(null)}
          word={selectedWord}
        />
      )}
    </>
  );
}

export default EpigramDetail;
