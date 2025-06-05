import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ← должен быть этот импорт

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);