import {createContext} from "react";
import {RestEndpointMethodTypes} from "@octokit/plugin-rest-endpoint-methods";

export type User = RestEndpointMethodTypes['users']['getAuthenticated']['response'] | undefined;
export type IUserContext = {
    user: User
    updateUser: (user: any) => void
}
export const UserContext = createContext<IUserContext>({
    user: undefined,
    updateUser: (user: User) => {}
});