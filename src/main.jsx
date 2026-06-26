// entry point of react and starts the reach application
// first js file that react executes
// ṣtrictmode -detect bugs, bad practices, deprecated API etc
// react-dom connect react to browser, display react component on webpage
// create-root: where to display our App
// .render : display everything inside root container


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
