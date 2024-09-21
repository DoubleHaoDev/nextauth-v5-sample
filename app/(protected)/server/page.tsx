import React from 'react';
import {auth} from "@/auth";

const ServerPage = async () => {
    const session = await auth();
    return (
        <div>
            ServerPage
        </div>
    );
};

export default ServerPage;
