import React from "react";
import { TextField, Button, Container } from "@material-ui/core";

export default function AddListing() {
  return (
    <div>
      <Container maxWidth="md">
        <form className="login-form" onSubmit>
          <TextField required name="name" label="Name" type="text" />
          <TextField required name="address" label="Address" type="text" />
          <TextField
            required
            name="hours"
            label="Hours (ex. 8AM - 9PM)"
            type="text"
          />
          <TextField
            required
            name="description"
            label="Description"
            type="text"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            SAVE
          </Button>
        </form>
      </Container>
    </div>
  );
}
