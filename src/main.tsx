import App from "./App"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React from "react"

const router = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
