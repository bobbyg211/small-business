import React from "react";
import { Container, Typography } from "@material-ui/core";
const { REACT_APP_GKEY } = process.env;

export default function Details(props) {
  const id = props.match.params.id;
  const listing = props.listings.find((listing) => listing.id == id);
  let key = REACT_APP_GKEY;

  return (
    <Container>
      <Typography variant="h3">{listing.name}</Typography>
      <Typography variant="h4">{listing.address}</Typography>
      <Typography variant="h4">{listing.hours}</Typography>
      <Typography variant="body1">{listing.description}</Typography>
      <iframe
        width="600"
        height="450"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkVpfTQZPtokRaHJpyc37w14&key=${key}`}
      ></iframe>
    </Container>
  );
}
