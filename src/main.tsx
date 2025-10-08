import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/i18n'
import { QueryProvider, DirectionProvider, ReduxProvider } from './providers'
import { Router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <DirectionProvider>
          <Router />
        </DirectionProvider>
      </QueryProvider>
    </ReduxProvider>
  </StrictMode>,
)
