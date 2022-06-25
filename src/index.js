import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContactCard } from './components/ContactCard';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ContactCard />
  </React.StrictMode>
)

