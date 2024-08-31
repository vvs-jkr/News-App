import React from 'react'
import { store } from './appStore'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import BaseLayout from './layouts/BaseLayout'
import '@/shared/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
