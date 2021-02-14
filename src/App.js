import React from "react";
import { makeStyles } from "@material-ui/core";

import buttons from "./buttons.json";

import { ButtonsList, Display } from "./components";
import { useCalculator } from "./contexts/calculator";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    background: theme.palette.primary.light,
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "15px",
    height: 600,
    width: 500,
    margin: "auto"
  },
  app: {
    margin: 25
  }
}));

export default function App() {
  const styles = useStyles();
  const { handleDigit, handleOperator } = useCalculator();

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const data = buttons.find((x) => x.id === id);
    if (Number.isInteger(data.display) || data.display === ".") {
      return handleDigit(data.display);
    }
    return handleOperator(data.id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.app}>
          <Display />
          <ButtonsList
            buttons={buttons}
            handleClick={handleClick}
          ></ButtonsList>
        </div>
      </div>
    </div>
  );
}
