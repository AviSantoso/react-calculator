import React from "react";

import { useHandleOperators } from "../hooks/useHandleOperators";

const CalculatorContext = React.createContext();

export function CalculatorProvider({ children }) {
  const [state, setState] = React.useState({
    value: "",
    oldValue: null,
    operator: null
  });

  const handleOperators = useHandleOperators();

  const handleDigit = (digit) => {
    setState((p) => ({ ...p, value: p.value + digit }));
  };

  const handleOperator = (op) => {
    setState((state) => {
      return { ...handleOperators[op](state, op) };
    });
  };

  const calculator = { ...state, handleDigit, handleOperator };

  return (
    <CalculatorContext.Provider value={calculator}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  return React.useContext(CalculatorContext);
}
