import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, RouterProviderProps } from "react-router-dom";
import { router } from "./router/router.tsx"
import './index.css'

const routerProps: RouterProviderProps['router'] = router;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerProps}/>
  </React.StrictMode>,
)
