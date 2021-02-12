import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { CalculatorProvider } from "./contexts/calculator";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </StrictMode>,
  rootElement
);
