import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { Login } from "./pages/Login.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Favoret } from "./pages/Favoret.jsx";
import { Store } from "./redux/Store.js";
import BuyForm from "./pages/BuyForm.jsx";

const routerPath = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cart", element: <Cart /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/logIn", element: <Login /> },
  { path: "/favoret", element: <Favoret /> },
  { path: "/BuyForm", element: <BuyForm /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={routerPath} />
    </Provider>
  </React.StrictMode>
);
