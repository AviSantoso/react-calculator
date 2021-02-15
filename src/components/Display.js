import React from "react";
import { makeStyles } from "@material-ui/core";
import { useCalculator } from "../contexts/calculator";

const useStyles = makeStyles((theme) => ({
  display: {
    margin: 5,
    height: "70px",
    width: "436px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontSize: "3em",
    fontWeight: 300,
    borderColor: theme.palette.primary.main,
    borderWidth: "2px",
    borderStyle: "solid",
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  }
}));

export function Display() {
  const styles = useStyles();
  const { value, oldValue, operator } = useCalculator();
  return (
    <div id="display" className={styles.display}>
      {value === "" ? "0" : value}
    </div>
  );
}
