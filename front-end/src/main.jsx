import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/theme.css"
import "./styles/global.css"
import { MainPage } from "./views/MainPage/MainPage.jsx"
import { Favourites } from "./views/Favourites/Favourites.jsx"
import { Cart } from "./views/Cart/Cart.jsx"
import { ProductList } from "./views/ProductList/ProductList.jsx"
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx"
import { Layout } from "./components/Layout/Layout.jsx"
import { mainPageLoader } from "./api/mainPageLoader.js"
import { productListLoader } from "./api/productListLoader.js"

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
      },
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductList />,
        loader: productListLoader,
      },
      {
        path: "/details",
        element: <ProductDetails />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
