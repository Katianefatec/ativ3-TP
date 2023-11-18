import React from 'react';
import { createRoot } from 'react-dom/client';
import Roteador from './componentes/roteador';


const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>
);