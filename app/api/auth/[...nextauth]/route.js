import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({

      name: "Credentials",
 
      credentials: {
        username: { label: "Email", type: "text", placeholder:"Type 'user'" },
        password: { label: "Password", type: "password", placeholder:"Type 'user'"  },
      },
      async authorize(credentials, req) {
    
        const user = { id: "user", name: "user", password: "user" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
      }
      
    }),
  ],
  
});

export { handler as GET, handler as POST };