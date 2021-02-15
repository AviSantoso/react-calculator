import React from "react";

import { useHandleOperators } from "../hooks/useHandleOperators";

const CalculatorContext = React.createContext();

const defaultState = {
  value: "",
  oldValue: null,
  operator: null
};

export function CalculatorProvider({ children }) {
  const [state, setState] = React.useState({ ...defaultState });

  const handleOperators = useHandleOperators();

  const handleDigit = (digit) => {
    setState((p) => ({ ...p, value: p.value + digit }));
  };

  const handleOperator = (newOperator) => {
    if (newOperator === "clear") {
      return setState({ ...defaultState });
    }

    let { value, oldValue, operator } = state;

    const handle = handleOperators[operator];

    if (operator) {
      if (handle) {
        oldValue =
          "" +
          (oldValue ? handle(parseFloat(oldValue), parseFloat(value)) : value);
      }
    } else {
      oldValue = value;
    }

    value = defaultState.value;

    if (newOperator === "equals") {
      return setState({ ...defaultState, value: oldValue });
    }

    return setState({ value, oldValue, operator: newOperator });
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
