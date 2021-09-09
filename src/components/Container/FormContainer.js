import React from 'react';
import style from './Container.module.css';

const FormContainer = ({ children }) => (
  <div className={style['FormContainer']}>{children}</div>
);

export default FormContainer;
