import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//Google Client login with NextAuth
export default NextAuth( {
    providers: [
        GoogleProvider( {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        } )
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    pages: {
        signIn: "/auth/login",//Custom page for login
    },
} );

