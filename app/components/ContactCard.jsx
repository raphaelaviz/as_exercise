'use client'

import React from 'react'
import Image from 'next/image'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import IconButton from './CardButton'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const ContactCard = ({ id, name, number, email}) => {

  const {data: session } = useSession()

  return (
    <div className='contact-card'>
      {session && <div className='flex space-x-4 text-xl justify-end'>
        <Link href={`/contact-details/${id}`}>
          <IconButton Icon={CgDetailsMore}/>
        </Link>
        <IconButton Icon={AiOutlineEdit} />
        <IconButton Icon={AiOutlineDelete} onClick={()=>modal_delete_contact.showModal()}/>
      </div> }

      <div className='flex items-center relative top-10 left-4'>
        <div className='flex flex-col w-1/3'>
          <Image 
            src={'https://via.placeholder.com/150'} 
            alt={'Contact image'}
            width={100} 
            height={200} 
          />
        </div>
        <div className='flex flex-col'>
          <p>Name: {name}</p>
          <p>Phone Number: {number}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
