import {ReactNode, useEffect, useState} from "react";
import {User, UserContext} from "./UserContext";
import {GitHubHelper} from "./GitHubHelper";
import LoadingApp from "../LoadingApp";
import {useNavigate} from "react-router-dom";

export const UserProvider = ({children}: { children: ReactNode }) => {
  const [user, updateUser] = useState<User | null>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('gh_token');
    if (!token) {
      navigate('/login', {replace: true});
      return;
    }

    const fetchUser = async () => {
      try {
        GitHubHelper.initAuth(token);
        const user = await GitHubHelper.getAuth();
        updateUser(user);
      } catch {
        localStorage.removeItem('gh_token');
        navigate('/login', {replace: true});
      }
    };

    fetchUser();
  }, []);

  if (!user) return <LoadingApp />;

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
