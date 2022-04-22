import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'


export default function EditContactForm(props) {
    const [open, setOpen] = useState(false);
    const [editContact, setEditContact] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        street: '',
        postcode: '',
        city: ''
    })

    const handleClickOpen = () => {
        setEditContact({
            firstName: props.editedContact.firstName,
            lastName: props.editedContact.lastName,
            phoneNo: props.editedContact.phoneNo,
            street: props.editedContact.street,
            postcode: props.editedContact.postcode,
            city:props.editedContact.city
        })
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChanged = (e) => {
        setEditContact({...editContact, [e.target.name]: [e.target.value]})
    }

    const addEditedContact = () => {
        handleClose();
    }
    return (
        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit Contact Info</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required={true}
                        margin="dense"
                        name="firstName"
                        value={editContact.firstName}
                        onChange={e => handleInputChanged(e)}
                        label="First Name"
                        fullWidth
                    />
                    <TextField
                        required={true}
                        margin="dense"
                        name="lastName"
                        value={editContact.lastName}
                        onChange={e => handleInputChanged(e)}
                        label="Last Name"
                        fullWidth
                    />
                    <TextField
                        required={true}
                        margin="dense"
                        name="phoneNo"
                        value={editContact.phoneNo}
                        onChange={e => handleInputChanged(e)}
                        label="Phone No"
                        fullWidth
                    />
                    <TextField
                        required={true}
                        margin="dense"
                        name="street"
                        value={editContact.street}
                        onChange={e => handleInputChanged(e)}
                        label="Street"
                        fullWidth
                    />
                    <TextField
                        required={true}
                        margin="dense"
                        name="postcode"
                        value={editContact.postcode}
                        onChange={e => handleInputChanged(e)}
                        label="Postcode"
                        fullWidth
                    />
                    <TextField
                        required={true}
                        margin="dense"
                        name="city"
                        value={editContact.city}
                        onChange={e => handleInputChanged(e)}
                        label="City"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handleClose} color="default">
                        <CancelIcon />
                    </IconButton>
                    <IconButton onClick={addEditedContact} color="primary">
                        <AddIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}