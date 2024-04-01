import {ReactNode, useEffect, useState} from "react";
import {UserContext, User} from "./UserContext";
import {GitHubHelper} from "./GitHubHelper";


export const UserProvider = ({children}: { children: ReactNode }) => {
    const [user, updateUser] = useState<User>();


    useEffect(() => {
        GitHubHelper.octoInstance.rest.users.getAuthenticated()
            .then(auth => {
                updateUser(auth);
            });
    }, []);

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;