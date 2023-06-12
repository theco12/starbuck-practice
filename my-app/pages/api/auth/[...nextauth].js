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
};
export default NextAuth(authOptions);
