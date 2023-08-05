
import React from 'react'
import ContactCard from "./components/ContactCard";
import { DeleteContactModal } from './components/DeleteContactModal';


async function getContacts() {
  const res = await fetch ('http:localhost:3000/api/contacts', {cache:'no-store'})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const contacts = await getContacts()

  return (
    <main className="px-12 py-12 flex flex-wrap justify-around">
      
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.appID}
          name={contact.name}
          number={contact.phone}
          email={contact.email}
          imageUrl={contact.imageUrl}
  
        />
      ))}
      <DeleteContactModal/>
    </main>
  )
}
