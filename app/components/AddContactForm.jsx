'use client'

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  //const [image, setImage] = useState(''); // Uncomment if you want to handle image file

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          email,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonResponse = await response.json();
      console.log(jsonResponse);

      // Reset the form fields upon successful submission
      toast.success('Contact added to the list', { position: 'top-center', duration: 7000 });
      setName('');
      setContact('');
      setEmail('');
      //setImage(''); // Uncomment if you want to handle image file
    } catch (error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    }
  };
  
  return (
    <form onSubmit={onSubmit} className="w-1/3 mx-auto mt-20 space-y-5 border-2 border-blue-800 rounded-lg border-opacity-20 p-4">
      <div className="flex flex-col">
        <h1 className='text-center text-3xl'>Add new contact</h1>
        <label className="mb-2 font-bold text-lg ">Name:</label>
        <input 
          className="px-3 py-2 border border-grey-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col">
        <label className="mb-2 font-bold text-lg text-grey-darkest">Contact:</label>
        <input 
          className="px-3 py-2 border border-grey-500"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-bold text-lg text-grey-darkest">Email:</label>
        <input 
          className="px-3 py-2 border border-grey-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-bold text-lg text-grey-darkest">Image:</label>
        <input 
          type="file"
          className="px-3 py-2 border border-grey-500"
          // Uncomment the next two lines if you want to handle image file
          // value={image}
          // onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddContactForm;
