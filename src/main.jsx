import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './pages/Root'
import New, { loader as newLoader } from './pages/New'
import View, { loader as viewLoader } from './pages/View'
import Test from './pages/Test'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/:id",
    element: <View />,
    loader: viewLoader
  },
  {
    path: "/New/:id",
    element: <New />,
    loader: newLoader
  },
  {
    path: "/Test",
    element: <Test />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
)
