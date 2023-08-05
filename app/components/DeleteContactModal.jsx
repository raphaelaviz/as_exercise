'use client'

import React from 'react'

export const DeleteContactModal = ( {contactToDelete} ) => {
 
    const deleteContact = async () => {
        const res = await fetch(`/api/contacts/${contactToDelete}`, { method: 'DELETE' });
        const data = await res.json();
      }


  return (
    <dialog id="modal_delete_contact" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h1 className="text-lg font-bold">
          Are you sure?
        </h1>
        <p className="py-4">
          This will permanently delete the contact from the list. Do you wish to continue?
        </p>
        <div className="modal-action">
          <button onClick={deleteContact} className="btn">
            Yes
          </button>
          <button className="btn">
            No
          </button>
        </div>
      </form>
    </dialog>
  )
}