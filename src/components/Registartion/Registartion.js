import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FormContainer } from '../../components/Container';
import FormGroup from '../FormGroup/FormGroup';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

export default function Registration() {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleCHangeChecked(e) {
    setIsChecked(!isChecked);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.signupUser({ name, email, password }));
    setName('');
    setEmail('');
    setIsChecked(false);
    setPassword('');
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup
          groupClass="mb-3"
          controlId="formBasicName"
          labelText="Name"
          controlProps={{
            type: 'text',
            value: name,
            placeholder: 'Enter Name',
            onChange: e => setName(e.target.value),
          }}
        />
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox">
            <Form.Check.Input
              type="checkbox"
              onChange={handleCHangeChecked}
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
  );
}
