import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Filter out specific third-party console warnings and context lost messages
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('THREE.Clock: This module has been deprecated') ||
     args[0].includes('THREE.WebGLRenderer: Context Lost') ||
     args[0].includes('THREE.WebGLRenderer: context lost'))
  ) {
    return;
  }
  originalWarn(...args);
};

const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('THREE.WebGLRenderer: Context Lost') ||
     args[0].includes('THREE.WebGLRenderer: context lost') ||
     args[0].includes('Invalid DOM property `stop-color`'))
  ) {
    return;
  }
  originalError(...args);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
