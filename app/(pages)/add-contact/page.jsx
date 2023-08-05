import AddContactForm from '@/app/components/AddContactForm'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const AddContactPage = () => {
  return (
    <div>
      <AddContactForm/>
      <Toaster/>
    </div>
  )
}

export default AddContactPage