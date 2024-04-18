import KeycloakProvider from "next-auth/providers/keycloak";
import NextAuth from 'next-auth';
export const authOptions =  {

  secret:'somethingverysecret',
  providers: [
    KeycloakProvider({
      clientId: 'nextclient',
      clientSecret:'sdfsdfsdfsdfsdfsd',
      issuer: 'http://localhost:8080/realms/nextjsAuth'
    })
  ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }