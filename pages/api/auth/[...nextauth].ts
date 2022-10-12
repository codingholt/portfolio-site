import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 12 * 60 * 60,
	},
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				//Login checker. to be improved.
				if (email !== "hey@svennijholt.xyz" || password !== "admin01") {
					throw new Error("invalid credentials");
				}

				// if everything is fine
				return {
					id: "0001",
					name: "Sven",
					email: email,
					role: "admin",
				};
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		error: "/auth/error",
		// signOut: '/auth/signout'
	},
	callbacks: {
		jwt(params) {
			// update token
			if (params.user?.role) {
				params.token.role = params.user.role;
			}
			// return final_token
			return params.token;
		},
	},
};

export default NextAuth(authOptions);
