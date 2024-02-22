// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '@mui/material/styles'; // Material-UI의 스타일 파일
import 'antd/dist/antd.css'; // Ant Design의 CSS 파일
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap의 CSS 파일
import 'semantic-ui-css/semantic.min.css'; // Semantic UI의 CSS 파일
import 'tailwindcss/tailwind.css'; // Tailwind CSS의 CSS 파일



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


