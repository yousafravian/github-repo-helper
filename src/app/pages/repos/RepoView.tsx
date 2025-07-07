import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../components/Card";
import {Repo} from "../../shared/types/Repos";
import {Button} from "../../components/Button";
import {ExternalLink, Trash2, Star, GitFork, Eye, Calendar, Code2} from "lucide-react";
import {Checkbox} from "../../components/Checkbox";

export default function RepoView({ repo }: { repo: Repo }) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getLanguageColor = (language: string | null) => {
        const colors: Record<string, string> = {
            'TypeScript': 'from-blue-400 to-blue-600',
            'JavaScript': 'from-yellow-400 to-yellow-600',
            'Python': 'from-green-400 to-green-600',
            'Java': 'from-orange-400 to-orange-600',
            'C#': 'from-purple-400 to-purple-600',
            'Go': 'from-cyan-400 to-cyan-600',
            'Rust': 'from-orange-500 to-red-600',
            'PHP': 'from-indigo-400 to-indigo-600',
            'Ruby': 'from-red-400 to-red-600',
            'HTML': 'from-orange-400 to-orange-500',
            'CSS': 'from-blue-400 to-blue-500',
        };
        return colors[language || ''] || 'from-gray-400 to-gray-600';
    };

    return (
        <Card className="group min-w-[320px] max-w-[400px] flex-1">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                        <Checkbox 
                            id={`repo-${repo.id}`} 
                            className="mt-1 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500 data-[state=checked]:border-transparent"
                        />
                        <div className="flex-1">
                            <CardTitle className="flex items-center gap-2 mb-1">
                                <label className="cursor-pointer" htmlFor={`repo-${repo.id}`}>
                                    {repo.name}
                                </label>
                                {repo.private && (
                                    <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                                        Private
                                    </span>
                                )}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{repo.owner.login}</span>
                                <span>/</span>
                                <span className="text-gray-400">{repo.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CardDescription className="mt-3">
                    {repo.description || 'No description provided'}
                </CardDescription>
            </CardHeader>
            
            <CardContent>
                <div className="space-y-4">
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{repo.forks_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{repo.watchers_count}</span>
                        </div>
                    </div>
                    
                    {/* Language and Date */}
                    <div className="flex items-center justify-between">
                        {repo.language && (
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getLanguageColor(repo.language)}`}></div>
                                <span className="text-sm text-gray-300">{repo.language}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>Updated {repo.updated_at ? formatDate(repo.updated_at) : 'N/A'}</span>
                        </div>
                    </div>
                    
                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {repo.topics.slice(0, 3).map((topic, index) => (
                                <span 
                                    key={index}
                                    className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                                >
                                    {topic}
                                </span>
                            ))}
                            {repo.topics.length > 3 && (
                                <span className="px-2 py-1 text-xs bg-gray-500/10 text-gray-400 rounded-full border border-gray-500/20">
                                    +{repo.topics.length - 3} more
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </CardContent>
            
            <CardFooter>
                <div className="flex gap-2">
                    <Button 
                        variant="destructive" 
                        size='sm'
                        className="group/btn"
                        title="Delete repository"
                    >
                        <Trash2 className="w-4 h-4 group-hover/btn:animate-pulse"/>
                    </Button>
                    <Button 
                        variant="outline" 
                        size='sm'
                        title="View code"
                        onClick={() => window.open(repo.html_url, '_blank')}
                        className="group/btn"
                    >
                        <Code2 className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform"/>
                        Code
                    </Button>
                    <Button 
                        variant="neon" 
                        size='sm' 
                        title="Open repository"
                        onClick={() => window.open(repo.html_url, '_blank')}
                        className="group/btn"
                    >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"/>
                        Open
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}