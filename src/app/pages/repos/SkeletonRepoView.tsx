import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../components/Card";
import {Repo} from "../../shared/types/Repos";
import {Button} from "../../components/Button";
import {ExternalLink, Trash2} from "lucide-react";
import {Checkbox} from "../../components/Checkbox";
import {Skeleton} from "../../components/Skeleton";
import * as React from "react";
import {cn} from "../../shared/utils";

export default function SkeletonRepoView({
                                           className,
                                           ...props
                                         }: React.HTMLAttributes<HTMLDivElement>) {

  return <>
    <Card className={cn("flex-grow flex-shrink bg-white/5", className)} {...props}>
      <CardHeader>
        <CardTitle><Skeleton className="w-[20%] h-[20px] bg-gray-700/10 dark:bg-gray-700/30"/></CardTitle>
        <CardDescription><Skeleton className="w-[80%] h-[20px] bg-gray-700/10 dark:bg-gray-700/30"/></CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Skeleton className="w-[44px] h-[36px] bg-gray-700/10 dark:bg-gray-700/30"/>
      </CardFooter>
    </Card>
  </>
}