import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { store } from "./context/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
