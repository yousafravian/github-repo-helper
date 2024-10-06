import React, {useEffect, useState} from 'react';
import {GitHubHelper} from "../services/GitHubHelper";
import RepoView from "./RepoView";
import {Repo} from "../shared/types/Repos";

function Repos() {
    const [repos, setRepos] = useState<Array<Repo>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const repos = await GitHubHelper.getRepositories();
                setRepos(repos);
                setLoading(false);
            } catch (e) {
                // setLoading(false);
                console.error('Error fetching Repos');
            }

        }
        fetchData();
    }, []);
    return (
        <div className='text-white mt-4'>

            {loading && <div
                className="flex m-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>}

            {!loading && <ul className='flex flex-wrap gap-6'>
                {repos.map(repo =>
                    <RepoView key={repo.url} repo={repo}/>
                )}
            </ul>}
        </div>
    );
}

export default Repos;
