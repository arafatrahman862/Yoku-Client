import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routes/Routes'
import {

  RouterProvider,
} from "react-router-dom"








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
    <div className='px-12 bg-slate-50'>
    <RouterProvider router={router} />
    </div>
  
    
  </React.StrictMode>,
)
