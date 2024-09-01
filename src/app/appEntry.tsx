import React from 'react'
import { store } from './appStore'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/shared/index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
