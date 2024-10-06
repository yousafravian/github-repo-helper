import {Repo} from "../shared/types/Repos";

export default function RepoView({ repo }: { repo: Repo }) {

    console.log("Repo");
    return <>
        <div
            className='h-32 rounded-xl w-64 border border-amber-700 px-4 py-2 bg-gray-400/40 text-black drop-shadow-2xl shadow-2xl backdrop-blur-sm'>
            <span className='capitalize font-bold'>{repo.owner.login}</span>
            <br/>
            <span>{repo.name}</span>
        </div>
    </>
}