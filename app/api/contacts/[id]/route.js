// DELETE ASSISTANT
export async function DELETE(request) {
    try {
      const url = new URL(request.url)
      const id = url.pathname.split('/').pop()
  
      const deletedContact = await prisma.contacts.delete({
        where: { id },
      })
  
      if (!deletedContact) {
        return new Response('There\'s been an error. Try again.')
      }
  
      return new Response(JSON.stringify({ deletedContact }))
    } catch (error) {
      console.error('Error in DELETE /api/contacts/:id', error)
      return new Response('Internal server error', { status: 500 })
    }
  }