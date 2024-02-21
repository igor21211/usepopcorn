import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StartRating from "./components/StarRating/StartRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*     <StartRating
      maxRating={3}
      defaultRating={2}
      messages={["Bad", "Fine", "Good"]}
    />
    <StartRating maxRating={5} defaultRating={3} /> */}
  </React.StrictMode>,
);
