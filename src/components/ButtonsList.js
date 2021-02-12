import { Button } from "@material-ui/core";

export function ButtonsList({ buttons, handleClick }) {
  return (
    <div>
      {buttons.map((x) => (
        <Button variant="outlined" id={x.id} key={x.id} onClick={handleClick}>
          {x.display}
        </Button>
      ))}
    </div>
  );
}
