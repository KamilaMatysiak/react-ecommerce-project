import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/theme.css'
import './styles/global.css'
import { MainPage } from './views/MainPage/MainPage.jsx'
import { Favourites } from './views/Favourites/Favourites.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
