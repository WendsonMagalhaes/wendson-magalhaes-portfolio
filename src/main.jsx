import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from '../src/components/ThemeContext.jsx'; // ⬅️ importe o contexto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* ⬅️ envolve o App aqui */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
