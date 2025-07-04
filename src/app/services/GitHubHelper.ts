import {Octokit} from "octokit";
import {Repo} from "../shared/types/Repos";

export class GitHubHelper {
    static octoInstance: Octokit;

    static clientId = 'Ov23liED2YOJyCBH9HOg';
    static clientSecret = '57a93d522b00f68d2414b0426de710a8ecd82d8f';


    static async getRepositories(): Promise<Array<Repo>> {
        try {
            const result = await GitHubHelper.octoInstance.rest.repos.listForAuthenticatedUser();
            return result.data;
        } catch (e) {
            return [];
        }
    }

    static initAuth(auth: string): void {
        GitHubHelper.octoInstance = new Octokit({
            auth
        });
    }

    static async getAuth() {
        return await GitHubHelper.octoInstance.rest.users.getAuthenticated();
    }


    static async logout(reload: boolean = true) {
        localStorage.removeItem('gh_token');
        reload && window.location.reload();
    }

}