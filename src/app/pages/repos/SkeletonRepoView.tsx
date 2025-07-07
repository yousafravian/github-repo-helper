import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "../../components/Card";
import { cn } from "../../shared/utils";

interface SkeletonRepoViewProps {
    className?: string;
}

export default function SkeletonRepoView({ className }: SkeletonRepoViewProps) {
    return (
        <Card className={cn("min-w-[320px] max-w-[400px] flex-1", className)}>
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-4 h-4 bg-white/10 rounded shimmer"></div>
                        <div className="flex-1 space-y-3">
                            <div className="h-5 bg-white/10 rounded-md shimmer w-3/4"></div>
                            <div className="h-3 bg-white/5 rounded shimmer w-1/2"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="h-4 bg-white/5 rounded shimmer w-full"></div>
                    <div className="h-4 bg-white/5 rounded shimmer w-4/5 mt-2"></div>
                </div>
            </CardHeader>
            
            <CardContent>
                <div className="space-y-4">
                    {/* Stats skeleton */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-white/5 rounded shimmer"></div>
                            <div className="w-6 h-3 bg-white/5 rounded shimmer"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-white/5 rounded shimmer"></div>
                            <div className="w-6 h-3 bg-white/5 rounded shimmer"></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-white/5 rounded shimmer"></div>
                            <div className="w-6 h-3 bg-white/5 rounded shimmer"></div>
                        </div>
                    </div>
                    
                    {/* Language and date skeleton */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white/10 rounded-full shimmer"></div>
                            <div className="w-20 h-3 bg-white/5 rounded shimmer"></div>
                        </div>
                        <div className="w-24 h-3 bg-white/5 rounded shimmer"></div>
                    </div>
                    
                    {/* Topics skeleton */}
                    <div className="flex flex-wrap gap-1">
                        <div className="w-16 h-6 bg-white/5 rounded-full shimmer"></div>
                        <div className="w-20 h-6 bg-white/5 rounded-full shimmer"></div>
                        <div className="w-14 h-6 bg-white/5 rounded-full shimmer"></div>
                    </div>
                </div>
            </CardContent>
            
            <CardFooter>
                <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white/5 rounded-lg shimmer"></div>
                    <div className="w-16 h-8 bg-white/5 rounded-lg shimmer"></div>
                    <div className="w-16 h-8 bg-white/5 rounded-lg shimmer"></div>
                </div>
            </CardFooter>
        </Card>
    );
}