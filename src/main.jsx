import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './utils/i18n';
import './index.css';
import "@fontsource/poppins/300.css"; // Light (texto secundario)
import "@fontsource/poppins/400.css"; // Normal (párrafos)
import "@fontsource/poppins/500.css"; // Medium (subtítulos)
import "@fontsource/poppins/600.css"; // Semibold (títulos)
import "@fontsource/poppins/700.css"; // Bold (títulos principales)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
