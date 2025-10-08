import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lib/i18n'
import { QueryProvider, DirectionProvider, ReduxProvider, ThemeProvider } from './providers'
import { Router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <ReduxProvider>
        <QueryProvider>
          <DirectionProvider>
            <Router />
          </DirectionProvider>
        </QueryProvider>
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>,
)
