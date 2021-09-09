import React from 'react';
import { createPortal } from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

const PrivacyPolicyView = props => {
  return createPortal(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Privacy Policy</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
          provident officiis pariatur rem deserunt perspiciatis repellendus
          autem reiciendis nulla tempora nemo deleniti quod sunt ea? Magni eum
          dolorum quam magnam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illum, provident officiis pariatur rem deserunt
          perspiciatis repellendus autem reiciendis nulla tempora nemo deleniti
          quod sunt ea? Magni eum dolorum quam magnam. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Illum, provident officiis pariatur
          rem deserunt perspiciatis repellendus autem reiciendis nulla tempora
          nemo deleniti quod sunt ea? Magni eum dolorum quam magnam. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Illum, provident
          officiis pariatur rem deserunt perspiciatis repellendus autem
          reiciendis nulla tempora nemo deleniti quod sunt ea? Magni eum dolorum
          quam magnam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Illum, provident officiis pariatur rem deserunt perspiciatis
          repellendus autem reiciendis nulla tempora nemo deleniti quod sunt ea?
          Magni eum dolorum quam magnam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Illum, provident officiis pariatur rem deserunt
          perspiciatis repellendus autem reiciendis nulla tempora nemo deleniti
          quod sunt ea? Magni eum dolorum quam magnam.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('root-portal'),
  );
};
export default PrivacyPolicyView;
