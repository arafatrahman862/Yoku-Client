import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routes/Routes'
import {

  RouterProvider,
} from "react-router-dom"
import AuthProvider from './providers/AuthProvider'









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    

   <div className='px-12 bg-slate-50'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>

  
    
  </React.StrictMode>,
)
