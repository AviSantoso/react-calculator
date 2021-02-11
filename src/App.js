import * as _ from "lodash";
import buttons from "./buttons.json";
import "./styles.css";

export default function App() {
  const operators = _.filter(buttons, (x) => x.type === "operator");
  const digits = _.filter(buttons, (x) => x.type === "digit");

  console.log("operators", operators);
  console.log("digits", digits);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
