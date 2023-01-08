import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { store } from "./context/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <App />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
