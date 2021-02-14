export function useHandleOperators() {
  function add(state, newOp) {
    console.log("Add");
    return state;
  }

  function subtract(state, newOp) {
    console.log("Subtract");
    return state;
  }

  function multiply(state, newOp) {
    console.log("Multiply");
    return state;
  }

  function divide(state, newOp) {
    console.log("Divide");
    return state;
  }

  function power(state, newOp) {
    console.log("Power");
    return state;
  }

  function clear(state, newOp) {
    console.log("Clear");
    return state;
  }

  function equals(state, newOp) {
    console.log("Equals");
    return state;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    power,
    clear,
    equals
  };
}
