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
import DeleteIcon from "@material-ui/icons/Delete";

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
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, index) => (
            <TableRow key={listing.id}>
              <TableCell>
                <Link to={`/listing/${listing.id}`}>{listing.name}</Link>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.address}</TableCell>
              <TableCell>{listing.hours}</TableCell>
              <TableCell>
                {document.cookie === "loggedIn=true" ? (
                  <DeleteIcon
                    onClick={() => props.deleteListing(index)}
                    className="delete-icon"
                  />
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
