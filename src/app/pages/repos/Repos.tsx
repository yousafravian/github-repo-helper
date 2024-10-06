import React, {useEffect, useState} from 'react';
import {GitHubHelper} from "../../services/GitHubHelper";
import RepoView from "./RepoView";
import {Repo} from "../../shared/types/Repos";
import SkeletonRepoView from "./SkeletonRepoView";

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

            {loading && <ul className='flex flex-wrap gap-6'>
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((_, index) =>
                  <SkeletonRepoView className="min-w-[30%] max-w-[500px]" key={index} />
                )}
            </ul>}

            {!loading && <ul className='flex flex-wrap gap-6'>
                {repos.map(repo =>
                  <RepoView repo={repo} key={repo.url} />
                )}
            </ul>}

        </div>
    );
}

export default Repos;
