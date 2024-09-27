import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./app/locales/i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
