import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routes/Routes'
import {

  RouterProvider,
} from "react-router-dom"
import AuthProvider from './providers/AuthProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async';









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    

   <div className='px-12 bg-slate-50'>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
    </div>

  
    
  </React.StrictMode>,
)
