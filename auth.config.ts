
import type { NextAuthConfig } from "next-auth"
import Credentials from "@auth/core/providers/credentials";
import {LoginSchema} from "@/schemas";
import {getUserByEmail, getUserById} from "@/data/user";
import bcrypt from "bcryptjs";

// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [Credentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);
            if(validatedFields.success) {
               const {email, password} = validatedFields.data;
               const user = await getUserByEmail(email);
               if( !user || !user.password){
                   return null;
               }
               const passwordsMatch = await bcrypt.compare(
                   password,
                   user.password
               );
                if(passwordsMatch){
                     return user;
                }
            }
            return null;
        }
    })],
} satisfies NextAuthConfig
