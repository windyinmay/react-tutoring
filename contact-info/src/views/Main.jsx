import React, {useState} from 'react'
import ContactInfo from '../components/ContactInfo'
import Navigation from '../components/Nav'

export default function Main() {
    const [contacts, setContacts] = useState([]);
    return(
        <div>
        <Navigation addContacts={setContacts} contacts={contacts}/>
        <ContactInfo contacts={contacts}/>
        </div>
    )
}