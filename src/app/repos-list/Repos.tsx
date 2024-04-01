import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../services/UserContext";
import {GitHubHelper} from "../services/GitHubHelper";
import {RestEndpointMethodTypes} from "@octokit/plugin-rest-endpoint-methods";
import {LinkIcon} from "@heroicons/react/16/solid";

function Repos() {
    const {user} = useContext(UserContext);
    const [repos, setRepos] = useState<RestEndpointMethodTypes['repos']['listForAuthenticatedUser']['response']['data']>([])

    useEffect(() => {
        GitHubHelper.octoInstance.rest.repos.listForAuthenticatedUser()
            .then(repos => {
                setRepos(repos.data ?? []);
            })
    }, []);
    return (
        <div className='text-white md:px-[25%]'>
            <h1 className='text-4xl ps-2 mb-5 font-bold tracking-wide uppercase'>Repos:</h1>
            {repos.length <= 0 && <div
                className="flex m-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>}
            <ul className=''>
                {repos.map(repo =>
                    <li className='p-2 flex align-middle justify-between hover:bg-cyan-100 hover:bg-opacity-10 transition-all cursor-pointer active:hover:bg-opacity-20 select-none'>
                        <span>{repo.full_name}</span>
                        <LinkIcon onClick={() => {
                            window.open(repo.html_url, "_blank")
                        }} className='h-6 w-6'/>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Repos;
