import { User as NextAuthUser } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: NextAuthUser & {
      id: string;
    };
  }
}
