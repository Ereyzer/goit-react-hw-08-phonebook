import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormGroup = ({
  groupClass,
  controlId,
  labelClass,
  labelText,
  controlProps,
  children,
}) => (
  <Form.Group className={groupClass} controlId={controlId}>
    <Form.Label className={labelClass}>{labelText}</Form.Label>
    <Form.Control {...controlProps} />
    {children && children}
  </Form.Group>
);

FormGroup.defaultProps = {
  labelClass: null,
  children: null,
};

FormGroup.propTypes = {
  groupClass: PropTypes.string.isRequired,
  controlId: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  controlProps: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default FormGroup;
