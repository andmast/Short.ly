import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import UrlForm from "./Componets/UrlForm";
import ShortLinks from "./Componets/ShortLinks";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <UrlForm />
      <ShortLinks />
    </React.Fragment>
  );
}
