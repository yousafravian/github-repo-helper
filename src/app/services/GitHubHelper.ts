import { Octokit } from "octokit";
export class GitHubHelper {
    static octoInstance: Octokit = new Octokit({
        auth: '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'
    });
}