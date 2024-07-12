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
import { productDetailsLoader } from "./api/productDetailsLoader.js"
import { addProductToFavouritesAction } from "./api/addProductToFavouritesAction.js"
import { favouritesLoader } from "./api/favouritesLoader.js"
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js"

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavouritesAction,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
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
        loader: favouritesLoader,
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
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
