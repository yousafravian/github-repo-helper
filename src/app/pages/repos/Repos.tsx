import React, {useEffect, useState} from 'react';
import {GitHubHelper} from "../../services/GitHubHelper";
import RepoView from "./RepoView";
import {Repo} from "../../shared/types/Repos";
import SkeletonRepoView from "./SkeletonRepoView";
import {Search, Filter, Grid, List, Plus, Download} from "lucide-react";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

function Repos() {
    const [repos, setRepos] = useState<Array<Repo>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredRepos, setFilteredRepos] = useState<Array<Repo>>([]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const repos = await GitHubHelper.getRepositories();
                setRepos(repos);
                setFilteredRepos(repos);
                setLoading(false);
            } catch (e) {
                console.error('Error fetching Repos');
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = repos.filter(repo =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repo.language?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepos(filtered);
    }, [searchTerm, repos]);

    return (
        <div className='text-white mt-6 animate-slide-in'>
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold gradient-text mb-2">
                            Your Repositories
                        </h1>
                        <p className="text-gray-400">
                            Manage and explore your GitHub repositories
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            New Repo
                        </Button>
                        <Button variant="glass" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Search and Filter Bar */}
                <div className="glass-card p-4 rounded-2xl">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                placeholder="Search repositories..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-500/50"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </Button>
                            <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
                                <Button
                                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setViewMode('grid')}
                                    className="h-8 w-8 p-0"
                                >
                                    <Grid className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setViewMode('list')}
                                    className="h-8 w-8 p-0"
                                >
                                    <List className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            {!loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="glass-card p-6 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Total Repos</p>
                                <p className="text-2xl font-bold text-white">{repos.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">{repos.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Public</p>
                                <p className="text-2xl font-bold text-white">{repos.filter(r => !r.private).length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">{repos.filter(r => !r.private).length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Private</p>
                                <p className="text-2xl font-bold text-white">{repos.filter(r => r.private).length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">{repos.filter(r => r.private).length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Total Stars</p>
                                <p className="text-2xl font-bold text-white">{repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">⭐</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Repository Grid */}
            {loading && (
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                    {Array.from({length: 12}).map((_, index) => (
                        <SkeletonRepoView key={index} className="min-h-[280px]" />
                    ))}
                </div>
            )}

            {!loading && filteredRepos.length === 0 && (
                <div className="text-center py-12">
                    <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">No repositories found</h3>
                        <p className="text-gray-400 mb-4">
                            {searchTerm ? `No repositories match "${searchTerm}"` : 'You have no repositories yet.'}
                        </p>
                        {searchTerm && (
                            <Button variant="outline" size="sm" onClick={() => setSearchTerm('')}>
                                Clear Search
                            </Button>
                        )}
                    </div>
                </div>
            )}

            {!loading && filteredRepos.length > 0 && (
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                    {filteredRepos.map((repo, index) => (
                        <div key={repo.url} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-in">
                            <RepoView repo={repo} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Repos;
