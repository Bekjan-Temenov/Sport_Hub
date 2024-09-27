import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.css";
import { Provider } from "react-redux";
<<<<<<< HEAD
import store from "./app/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./app/locales/i18next";
=======
import { store } from "./app/store";
>>>>>>> e0a29e5365fd09ccc3a6ec100f4e7648da2dc098

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
