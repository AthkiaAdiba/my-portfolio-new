import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      try {
        // Send user info to your backend API
        await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            image: user.image,
            phone: "N/A",
            password: "123456",
            role: "user",
          }),
        });

        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        // Fetch role from backend and attach to session
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/users/email/${session?.user?.email}`
        );

        const data = await res.json();

        session.user.role = data?.data?.role;
        session.user._id = data?.data?._id;

        return session;
      } catch (error) {
        console.error("Error loading session user role:", error);
        return session;
      }
    },
  },
};
