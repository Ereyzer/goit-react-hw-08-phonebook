import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FormContainer } from '../../components/Container';
import { useRouteMatch } from 'react-router';
import apiService from '../../service/apiService';
const userInfo = {
  name: 'Erik',
  email: 'erik@mail.ua',
  password: '12345678',
};
export default function RegisterView(params) {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  function handleCHange(e) {
    setIsChecked(!isChecked);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('no checked');
    const test = await apiService.getUserInfo();
    console.log(test);
  }
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox">
              <Form.Check.Input
                type="checkbox"
                onChange={handleCHange}
                checked={isChecked}
              />
              <Form.Check.Label>
                Accept{' '}
                <Link
                  to={{
                    pathname: '/privacy_policy',
                    state: { background: location },
                  }}
                >
                  Privacy policy
                </Link>
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!isChecked}>
            Register
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
