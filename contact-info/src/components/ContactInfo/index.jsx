import React, {useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    {id: 'firstName', label: 'First Name', minWidth: 70},
    {id: 'lastName', label: 'Last Name', minWidth: 70},
    {
        id: 'phoneNo',
        label: 'Phone No',
        minWidth: 70,
        
    },
    {id: 'street', label: 'Street', minWidth: 70},
    {id: 'postcode', label: 'Post Code', minWidth: 60},
    {id: 'city', label: 'City', minWidth: 80},
];

function createData(firstName, lastName, phoneNo, street, postcode, city) {
    return {firstName, lastName, phoneNo, street, postcode, city};
}

const contacts =[
    createData('Vin', 'Fast', '046618760', 'Rakatulina', '00420', 'Helsinki'),
    createData('Jake', 'Ng', '046619960', 'Latutulina', '00410', 'Vantaa'),
    createData('Henri', 'Val', '046600960', 'Rakatkala', '00440', 'Espoo'),

]
export default function ContactInfo(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
   
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                <h3>Name</h3>
              </TableCell>
              <TableCell align="center" colSpan={1}>
               <h3> Phone</h3>
              </TableCell>
              <TableCell align="center" colSpan={3}>
                <h3>Address</h3>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}