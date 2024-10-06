import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/Card";
import {Repo} from "../shared/types/Repos";
import {Button} from "../components/Button";
import {ExternalLink, Trash2} from "lucide-react";
import {Checkbox} from "../components/Checkbox";

export default function RepoView({ repo }: { repo: Repo }) {

    return <>
        <Card className="flex-grow flex-shrink bg-white/5">
            <CardHeader>
                <CardTitle><Checkbox id="terms1" /> {repo.full_name}</CardTitle>
                <CardDescription>{ repo.description ?? '--' }</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="destructive" size='sm'><Trash2 className="w-5 h-5"/></Button>
                <Button title="Open Repo" size='sm' onClick={() => window.open(repo.html_url, '_blank')}><ExternalLink className="w-5 h-5"/></Button>
            </CardFooter>
        </Card>
    </>
}