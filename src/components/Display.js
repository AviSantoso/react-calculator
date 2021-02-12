import React from "react";
import { useCalculator } from "../contexts/calculator";

export function Display() {
  const { val, old, op } = useCalculator();
  return <div id="display">{val}</div>;
}
