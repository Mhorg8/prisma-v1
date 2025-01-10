import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import client from "./Prisma";
import bcrypt from "bcryptjs";

const options = {
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                phoneNumber: { label: "Phone Number", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { password, phoneNumber } = credentials as {
                    password: string;
                    phoneNumber: string;
                };

                try {
                    const user = await client.user.findUnique({
                        where: { phoneNumber },
                    });

                    if (!user) {
                        throw new Error("کاربری با این شماره تلفن یافت نشد");
                    }

                    const isCorrectPassword = await bcrypt.compare(password, user.password);

                    if (!isCorrectPassword) {
                        throw new Error("رمز عبور اشتباه است");
                    }

                    // Return user object
                    return {
                        username: user.username,
                        phoneNumber: user.phoneNumber,
                        firstname: user.firstname,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                    };
                } catch (error) {
                    console.error("Authorization error:", error);
                    throw new Error("مشکلی در احراز هویت پیش آمده است");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.username = user.username;
                token.firstname = user.firstname;
                token.phoneNumber = user.phoneNumber;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user = {
                username: token.username,
                firstname: token.firstname,
                phoneNumber: token.phoneNumber,
            };
            return session;
        },
    },
};

// Export handlers and other NextAuth utilities
export const { handlers, signIn, signOut, auth } = NextAuth(options);
