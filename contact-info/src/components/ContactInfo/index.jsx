import React, {useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function ContactInfo(props) {
    return(
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Postcode</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.contacts.map((contact) => (
            <TableRow
              key={contact.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contact.firstName}
              </TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.phoneNo}</TableCell>
              <TableCell>{contact.address.street}</TableCell>
              <TableCell>{contact.address.postcode}</TableCell>
              <TableCell>{contact.address.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}