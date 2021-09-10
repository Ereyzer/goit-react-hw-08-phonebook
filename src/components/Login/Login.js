import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FormContainer } from '../../components/Container';
import { authOperations } from '../../redux/auth';
import FormGroup from '../FormGroup/FormGroup';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('no checked');
    dispatch(authOperations.loginUser({ email, password }));
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        <FormGroup
          groupClass="mb-3"
          controlId="formBasicEmail"
          labelText="Email address"
          controlProps={{
            type: 'email',
            value: email,
            placeholder: 'Enter email',
            onChange: e => setEmail(e.target.value),
          }}
        >
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </FormGroup>

        <FormGroup
          groupClass="mb-3"
          controlId="formBasicPassword"
          labelText="Password"
          controlProps={{
            type: 'password',
            value: password,
            placeholder: 'Password',
            onChange: e => setPassword(e.target.value),
          }}
        />

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </FormContainer>
  );
}
