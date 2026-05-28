import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout/MainLayout';
import Home from './components/Pages/Home/Home';
import Timeline from './components/Pages/Timeline/Timeline';
import State from './components/Pages/State/State';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
const router=createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    children:[
        {
          path:'/',
          Component:Home,
        },
        {
          path:'/timeline',
          Component:Timeline,
        },
        {
          path:'State',
          Component:State
        }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
