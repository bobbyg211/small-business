import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Listings(props) {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell component="th" scope="row">
                <Link to={`/listing/${listing.id}`}>{listing.name}</Link>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.address}</TableCell>
              <TableCell>{listing.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
