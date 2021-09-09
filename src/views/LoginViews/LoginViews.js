import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
import { FormContainer } from '../../components/Container';

export default function HomeView(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('no checked');
  }
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
