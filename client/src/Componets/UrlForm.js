import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

function UrlForm() {
  const [url, setUrl] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    axios.post("http://localhost:5000/api/shorten", { url }).then(res => {
      console.log(res);
    });
    alert(`Submitting URL ${url}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
          id="outlined-basic"
          label="Urls"
          variant="outlined"
          helperText="Enter your urls to be shorten"
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}

export default UrlForm;
