import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import EpigramList from './components/EpigramList';
import EpigramDetail from './components/EpigramDetail';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

function App() {
  const [epigrams, setEpigrams] = useState([]);
  const [selectedEpigram, setSelectedEpigram] = useState(null);

  useEffect(() => {
    fetch('/api/epigrams')
      .then(response => response.json())
      .then(data => setEpigrams(data));
  }, []);

  const handleEpigramSelect = (epigramId) => {
    fetch(`/api/epigrams/${epigramId}`)
      .then(response => response.json())
      .then(data => setSelectedEpigram(data));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/epigrams">
          <Container>
            <Row>
              <Col md={4}>
                <EpigramList epigrams={epigrams} onEpigramSelect={handleEpigramSelect} />
              </Col>
              <Col md={8}>
                {selectedEpigram && <EpigramDetail epigram={selectedEpigram} />}
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
