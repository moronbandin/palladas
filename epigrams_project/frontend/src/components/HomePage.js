import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles.css';

function HomePage() {
  return (
    <Container className="my-5">
      <Card className="p-4">
        <Row className="align-items-center">
          <Col>
            <h1>Bienvenido a mi Portafolio</h1>
            <p>
              Soy [Tu Nombre], un filólogo clásico y programador. Este es mi portafolio interactivo de epigramas griegos.
            </p>
            <p>
              <Button variant="primary" href="/epigrams">Ver Epigramas</Button>
            </p>
          </Col>
        </Row>
      </Card>
      <Row className="mt-5">
        <Col md={6}>
          <h2>Sobre mí</h2>
          <p>Descripción sobre tu experiencia y habilidades.</p>
        </Col>
        <Col md={6}>
          <h2>Proyectos</h2>
          <p>Descripción de otros proyectos destacados.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
