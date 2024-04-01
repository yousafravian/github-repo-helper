import React, {useContext} from 'react';
import {UserContext} from "../UserContext";

function Repos() {

    const { user } = useContext(UserContext);
    return (
        <>
            {JSON.stringify(user)}
        </>
    );
}

export default Repos;
