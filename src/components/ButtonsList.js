import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 5,
    height: "70px",
    width: "140px",
    borderRadius: "10px",
    fontSize: "2em",
    fontWeight: 350,
    borderColor: theme.palette.primary.main,
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  }
}));

export function ButtonsList({ buttons, handleClick }) {
  const styles = useStyles();
  return (
    <div>
      {buttons.map((x) => (
        <Button
          className={styles.button}
          variant="outlined"
          id={x.id}
          key={x.id}
          onClick={handleClick}
        >
          {x.display}
        </Button>
      ))}
    </div>
  );
}
