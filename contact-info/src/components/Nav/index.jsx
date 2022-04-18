import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AddContactForm from '../AddContactForm'

export default function Navigation(props) {

return(
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Contact Information
                    </Typography>
                    <AddContactForm setAddContacts = {props.setContacts} addContacts = {props.contacts}/>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
    );
};