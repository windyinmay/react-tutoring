import React, {useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import EditContactForm from '../EditContactForm'


export default function ContactInfo(props) {
    return(
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>First Name</b></TableCell>
            <TableCell><b>Last Name</b></TableCell>
            <TableCell><b>Phone number</b></TableCell>
            <TableCell><b>Street</b></TableCell>
            <TableCell><b>Postcode</b></TableCell>
            <TableCell><b>City</b></TableCell>
            <TableCell></TableCell>
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
              <TableCell>
                <button onClick={() => <EditContactForm editedContact= {props.contacts}/>}>Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}