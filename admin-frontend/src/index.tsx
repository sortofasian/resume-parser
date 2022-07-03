import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter basename='/resume-parser-admin'>
            {/* Add basename for github pages*/}
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
