import {Octokit} from "octokit";
import {Repo} from "../shared/types/Repos";

export class GitHubHelper {
    static octoInstance: Octokit;


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

}