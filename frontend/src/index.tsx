// Dependencies //
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// React Redux //
import store from "./store";
import { Provider } from "react-redux";
// Pages & Components //
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Bootstrap Entry Point //
import "bootstrap/dist/css/bootstrap.min.css";

// Router with Routes //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
