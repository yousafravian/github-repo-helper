import {ReactNode, useEffect, useState} from "react";
import {UserContext, User} from "./UserContext";
import {GitHubHelper} from "./GitHubHelper";
import LoadingApp from "../LoadingApp";
import {useErrorBoundary} from "react-error-boundary";
import TokenInputFallback from "../shared/TokenInputFallback";
import {toast} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export const UserProvider = ({children}: { children: ReactNode }) => {
    const [user, updateUser] = useState<User | null>();
    const [token, setToken] = useState<string>('');
    const [error, setError] = useState<Error>();
    const {showBoundary, resetBoundary} = useErrorBoundary();

    GitHubHelper.initAuth(token);

    toast("Wow so easy!");

    const fetchUser = async (token: string) => {
        try {
            const user = await GitHubHelper.getAuth();
            updateUser(user);
        } catch (e: unknown) {
            updateUser(null);
            setError(new Error('Error fetching user'));
        }
    };

    const handleTokenSubmit = (token: string) => {
        setToken(token);
        resetBoundary();
    }

    useEffect(() => {
        const token = localStorage.getItem('gh_token');
        if(token) {
            handleTokenSubmit(token);
        } else {
            updateUser(null);
            setError(new Error('No token found'));
        }
    }, []);

    useEffect(() => {
        if (token) {
            fetchUser(token);
        }
    }, [token]);

    return (
        <>
            {!user && !token && error && (
                <TokenInputFallback onTokenSubmit={handleTokenSubmit}/>
            )}
            {!user && !error && <LoadingApp/>}
            {user && (
                <UserContext.Provider value={{user, updateUser}}>
                    {children}
                </UserContext.Provider>
            )}
        </>
    );
};

export default UserProvider;
