import React, { Component } from "react";
import { Button, TextField, Container } from "@material-ui/core";

class AddListing extends Component {
  state = {
    name: "",
    address: "",
    hours: "",
    description: "",
  };

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = 9;
    delete payload.open;
    console.log("NEW LISTING", payload);
    this.props.addListing(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        address: "",
        hours: "",
        description: "",
      });
    }
  };

  render() {
    return (
      <Container>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
          }}
        >
          <TextField
            id="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleTextChange}
            required
          />
          <TextField
            id="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleTextChange}
            required
          />
          <TextField
            id="hours"
            placeholder="Hours (ex. 8AM - 9PM)"
            value={this.state.hours}
            onChange={this.handleTextChange}
            required
          />
          <TextField
            id="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleTextChange}
            required
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            SAVE
          </Button>
        </form>
      </Container>
    );
  }
}

export default AddListing;
