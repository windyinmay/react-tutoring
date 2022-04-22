import React, {useState} from 'react'
import ContactInfo from '../components/ContactInfo'
import Navigation from '../components/Nav'


export default function Main() {
    const [contacts, setContacts] = useState([
        {
            firstName: 'Henri',
            lastName: 'Vadel',
            phoneNo: '0978322732',
            address: 
                {
                    street: 'Rakatulala',
                    postcode: '00450',
                    city: 'Espoo'
                }
        },
        {
            firstName: 'Jake',
            lastName: 'Ng',
            phoneNo: '0978322112',
            address: 
                {
                    street: 'Karatulala',
                    postcode: '00420',
                    city: 'Helsinki'
                }
        },
        {
            firstName: 'Aino',
            lastName: 'Helda',
            phoneNo: '0468322732',
            address: 
                {
                    street: 'Kitarakuja',
                    postcode: '00420',
                    city: 'Vantaa'
                }
        }
    ]);
    console.log(contacts)
    return(
        <div>
        <Navigation setContacts={setContacts} contacts={contacts}/>
        <ContactInfo contacts={contacts}/>
        </div>
    )
}