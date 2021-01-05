import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
    , document.getElementById('root'));

