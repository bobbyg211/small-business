import React from "react";
import { Container, Typography } from "@material-ui/core";
const { REACT_APP_GKEY } = process.env;

export default function Details(props) {
  const id = props.match.params.id;
  const listing = props.listings.find((listing) => listing.id == id);
  let key = REACT_APP_GKEY;
  let address = props.listings[id - 1].address;

  return (
    <Container className="details" maxWidth="sm">
      <Typography variant="h4">{listing.name}</Typography>
      <Typography variant="h5">{listing.address}</Typography>
      <Typography variant="h5">{listing.hours}</Typography>
      <Typography variant="body1">{listing.description}</Typography>
      <iframe
        width="100%"
        height="450"
        src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${address}`}
      ></iframe>
    </Container>
  );
}
