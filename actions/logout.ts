"use server";

import  {signOut} from "@/auth";

export const logout = async () => {
    //some server actions before signout;
  await signOut();
};
