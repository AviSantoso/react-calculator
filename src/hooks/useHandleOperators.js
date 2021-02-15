export function useHandleOperators() {
  function add(oldValue, value) {
    return oldValue + value;
  }

  function subtract(oldValue, value) {
    return oldValue - value;
  }

  function multiply(oldValue, value) {
    return oldValue * value;
  }

  function divide(oldValue, value) {
    return oldValue / value;
  }

  function power(oldValue, value) {
    return oldValue ^ value;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    power
  };
}
