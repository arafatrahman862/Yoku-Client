import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routes/Routes'
import {

  RouterProvider,
} from "react-router-dom";







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-slate-50'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
