import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
ReactDOMClient.createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
