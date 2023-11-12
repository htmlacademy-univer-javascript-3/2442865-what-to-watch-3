import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Description = {
  name: 'Movie Name',
  genre: 'Action',
  year: 2022,
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      {...Description}
    />
  </React.StrictMode>
);
