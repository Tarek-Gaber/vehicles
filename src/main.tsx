import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/i18n'
import App from './App.tsx'
import { QueryProvider, DirectionProvider } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </QueryProvider>
  </StrictMode>,
)
