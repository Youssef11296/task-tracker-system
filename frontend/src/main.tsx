import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { store } from "./context/index";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <App />
        </MainLayout>
      </Provider>
      <ToastContainer
        style={{ width: "fit-content", minWidth: "300px" }}
        autoClose={2000}
        pauseOnHover={false}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  </React.StrictMode>
);
