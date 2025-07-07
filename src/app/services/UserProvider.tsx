import {ReactNode, useEffect, useRef, useState} from "react";
import {User, UserContext} from "./UserContext";
import {GitHubHelper} from "./GitHubHelper";
import LoadingApp from "../LoadingApp";
import {useErrorBoundary} from "react-error-boundary";
import TokenInputFallback from "../shared/TokenInputFallback";

import 'react-toastify/dist/ReactToastify.css';
import {useToast} from "../shared/toaster/UseToast";
import {useNavigate} from "react-router-dom";

export const UserProvider = ({children}: { children: ReactNode }) => {
  // const intervalId = useRef<ReturnType<typeof setInterval>>();
  const [user, updateUser] = useState<User | null>();
  const [token, setToken] = useState<string | null>('');
  const [error, setError] = useState<Error>();
  const {showBoundary, resetBoundary} = useErrorBoundary();
  const navigate = useNavigate();
  const {toast} = useToast();

  const fetchUser = async (token: string) => {
    try {
      GitHubHelper.initAuth(token);
      const user = await GitHubHelper.getAuth();
      updateUser(user);
    } catch (e: unknown) {
      toast({
        title: "Opsie!!",
        description: "Looks like something is wrong with your token",
        variant: "destructive"
      });
      GitHubHelper.logout(false);
      updateUser(null);
      setToken(null);
      setError(new Error('Error fetching user'));
    }
  };

  const handleTokenSubmit = (token: string) => {
    setToken(token);
    resetBoundary();
  }

  const fetchAccessToken = async (code: string, controller: AbortController) => {
    try {
      const response = await fetch(`https://github-login-access-token-serverless.vercel.app/accessToken?code=${encodeURIComponent(code)}`, {
        method: 'GET',
        signal: controller.signal
      });
      if (response.status === 500) {
        toast({
          title: "Opsie!!",
          description: "Looks like something is wrong with your token",
          variant: "destructive"
        });
      }
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('gh_token', data.token);
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name === 'AbortError') {
        return;
      }
      toast({
        title: "Opsie!!",
        description: "Looks like something is wrong with your token",
        variant: "destructive"
      });
    }
  }


  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const controller = new AbortController();
    if(parsedUrl.searchParams.has('code')) {
      fetchAccessToken(parsedUrl.searchParams.get('code')!, controller);
    }

    const token = localStorage.getItem('gh_token');

    if (token) {
      handleTokenSubmit(token);
    } else {
      updateUser(null);
      setToken(null);
      setError(new Error('No token found'));
    }

    return () => {
      controller.abort();
    }

    /*if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {

    }, 1000);*/
  }, []);

  useEffect(() => {
    if (token) {
      fetchUser(token);
    }
  }, [token]);

  return (
    <>
      {!user && !token && error?.message && (
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
