import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout/MainLayout';
import Home from './components/Pages/Home/Home';
import Timeline from './components/Pages/Timeline/Timeline';
import State from './components/Pages/State/State';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import CardDetails from './components/Pages/UI/CardDetails/CardDetails';
const router=createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    children:[
        {
          index:true,
          Component:Home,
        },
        {
          path:'/timeline',
          Component:Timeline,
        },
        {
          path:'State',
          Component:State
        },
        {
          path: '/cardDetails/:friendId',
          Component: CardDetails,
          loader: ()=> fetch('/Data.json'),
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
