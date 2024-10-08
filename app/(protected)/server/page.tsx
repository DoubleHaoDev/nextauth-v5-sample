import React from 'react';
import {auth} from "@/auth";
import {currentUser} from "@/lib/auth";
import {UserInfo} from "@/components/user-info";

const ServerPage = async () => {
    const user = await currentUser();
    return (
        <UserInfo
            user={user}
            label="Server Component"
        />
    );
};

export default ServerPage;
