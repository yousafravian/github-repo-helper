import {ReactNode, useEffect, useState} from "react";
import {UserContext, UserType} from "./UserContext";
import {GitHubHelper} from "./services/GitHubHelper";


export const UserProvider = ({children}: { children: ReactNode }) => {
    const [user, updateUser] = useState<UserType>();


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