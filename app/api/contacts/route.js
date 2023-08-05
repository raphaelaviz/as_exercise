import prisma from '../../lib/prisma'
import { NextResponse } from 'next/server'

//GETS ALL CONTACTS
export async function GET() {

  try {
    const contacts = await prisma.contacts.findMany()
       
    return NextResponse.json(contacts)

  } catch (error) {
    console.error('Error in GET /api/contacts:', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}


//CREATES A CONTACT

export async function POST(request) {
  try {
    const body = await request.json()

    const newContact = await prisma.contacts.create({
      data: {
        name: body.name,
        phone: body.contact,
        email: body.email,
        imageUrl: "https://via.placeholder.com/150"
 
      },
    })

    return new Response(JSON.stringify(newContact), { status: 200 })
  } catch (error) {
    console.error('Error in POST /api/contacts:', error)
    return new Response('Internal server error', { status: 500 })
  }
}

