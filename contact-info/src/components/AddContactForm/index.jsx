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
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        street:'',
        postcode: '',
        city:''
    })

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const inputChanged = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    };
    console.log(inputChanged)

    const handleSave = () => {
       props.addContact([...props.contacts, contact]);
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
                    value={contact.firstName}
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
                    value={contact.lastName}
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
                    value={contact.phoneNo}
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
                    value={contact.street}
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
                    value={contact.postcode}
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
                    value={contact.city}
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