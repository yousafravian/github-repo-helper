import {createContext} from "react";
import {RestEndpointMethodTypes} from "@octokit/plugin-rest-endpoint-methods";

export type UserType = RestEndpointMethodTypes['users']['getAuthenticated']['response'];
export type IUserContext = {
    user: any
    updateUser: (user: any) => void
}
export const UserContext = createContext<IUserContext>({
    user: {test: 'user'},
    updateUser: () => {
    }
});