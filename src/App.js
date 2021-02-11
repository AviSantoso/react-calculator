import { makeStyles, Button } from "@material-ui/core";

import buttons from "./buttons.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  app: {
    background: theme.palette.primary.light,
    height: 600,
    width: 500,
    margin: "auto"
  }
}));

export default function App() {
  const styles = useStyles();

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.app}>
        <ButtonsList buttons={buttons} handleClick={handleClick}></ButtonsList>
      </div>
    </div>
  );
}

const ButtonsList = ({ buttons, handleClick }) => {
  return (
    <div>
      {buttons.map((x) => (
        <Button variant="outlined" id={x.id} key={x.id} onClick={handleClick}>
          {x.display}
        </Button>
      ))}
    </div>
  );
};
