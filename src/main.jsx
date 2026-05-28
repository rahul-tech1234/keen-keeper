import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
const router=createBrowserRouter([
  {
    path:'/',
    element: <h1>Element</h1>,
    children:([

    ])
  },
  {
    path:'/app',
    element:<h2>Apps .jsx</h2>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
