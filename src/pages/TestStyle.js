import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  btn: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "bisque",
    },
  },
});

export default function TestStyle() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const classes = useStyle();

  function handleSubmit() {
    setNameError(false);

    if (name == "") {
      setNameError(true);
    }
    if (name) {
      console.log(name);
    }
  }

  return (
    <div>
      <Typography variant="h6" noWrap>
        h1. Heading
      </Typography>
      <FormControl>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth
          required
          error={nameError}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.btn}
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
}
