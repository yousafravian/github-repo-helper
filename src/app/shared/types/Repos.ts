import {RestEndpointMethodTypes} from "@octokit/plugin-rest-endpoint-methods";

export type ReposListResponse = RestEndpointMethodTypes['repos']['listForAuthenticatedUser']['response'];
export type Repo = ReposListResponse['data'][0];