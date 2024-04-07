import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@openstarter/database";
import * as bcrypt from "bcrypt";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as any,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "openstarter",
      credentials: {
        email: { type: "email", name: "email" },
        password: { type: "password", name: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("User not registered");
        }

        if (!user.password) {
          throw new Error("Password is not setup for this account");
        }

        const isPasswordMatching = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordMatching) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
