import React from "react";

const CalculatorContext = React.createContext();

const handleOperators = {
  clear: (p) => p,
  decimal: (p) => p,
  equals: (p) => p,
  add: (p) => p,
  subtract: (p) => p,
  multiply: (p) => p,
  divide: (p) => p
};

export function CalculatorProvider({ children }) {
  const [val, setVal] = React.useState(0);
  const [old, setOld] = React.useState(null);
  const [op, setOp] = React.useState(null);

  const handleDigit = (digit) => {
    setVal((p) => p * 10 + digit);
  };

  const handleOperator = (op) => {
    console.log(op);
    setVal(handleOperators[op]);
    setOld(val);
    setOp(op);
    setVal(() => 0);
  };

  const calculator = { val, old, op, handleDigit, handleOperator };

  return (
    <CalculatorContext.Provider value={calculator}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  return React.useContext(CalculatorContext);
}
