import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button } from "@material-ui/core";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </React.Fragment>
  );
}
