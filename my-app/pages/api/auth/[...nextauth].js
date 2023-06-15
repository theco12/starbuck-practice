import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "f3aeb9122c7c3c0bdb93",
      clientSecret: "afbeb4acb07b98c14aa90c83150475aeae624182",
    }),
  ],
  secret: "kreg6022!@JWTSecret",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
