import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function AddContactForm (props) {
    const [open, setOpen] = useState(false);
    const [addContact, setAddContact] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        street:'',
        postcode: '',
        city:''
    })
    console.log(props.setAddContacts)

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const inputChanged = (e) => {
        setAddContact({...addContact, [e.target.name]: e.target.value})
    };
    console.log(addContact)

    const handleSave = (e) => {
       props.setAddContacts([...props.addContacts, addContact]);
       handleClose();
    }

    return (
        <div>
            <IconButton aria-label="add-contact-info" component="span" onClick={handleClickOpen}>
                <AddCircleIcon/>
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Add Contact</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={inputChanged}
                    name="firstName"
                    value={addContact.firstName}
                    label="First Name"
                    type= "text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={inputChanged}
                    name="lastName"
                    value={addContact.lastName}
                    label="Last Name"
                    type= "text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={inputChanged}
                    name="phoneNo"
                    value={addContact.phoneNo}
                    label="Phone Number"
                    type= "text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={inputChanged}
                    name="street"
                    value={addContact.street}
                    label="Street"
                    type= "text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={inputChanged}
                    name="postcode"
                    value={addContact.postcode}
                    label="Post Code"
                    type= "text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={inputChanged}
                    name="city"
                    value={addContact.city}
                    label="City"
                    type= "text"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} color="primary">Add</Button>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}