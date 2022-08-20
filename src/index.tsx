import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./components/App";

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
ReactDOMClient.createRoot(container!);
root.render(<App />);
