import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import '@/lib/i18n'
import '@/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
