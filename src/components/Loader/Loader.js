import React from 'react';
import './Loading.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Loader from 'react-loader-spinner';
const Loading = () => (
  <Loader
    type="TailSpin"
    color="#00BFFF"
    height={100}
    width={100}
    // timeout={3000} //3 secs
    className="Loading"
  />
);

export default Loading;
