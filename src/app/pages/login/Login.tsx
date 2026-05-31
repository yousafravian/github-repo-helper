import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Github} from "lucide-react";
import {Button} from "../../components/Button";
import {GitHubHelper} from "../../services/GitHubHelper";
import {useToast} from "../../shared/toaster/UseToast";
import LoadingApp from "../../LoadingApp";

export default function Login() {
  const navigate = useNavigate();
  const {toast} = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('gh_token');
    if (token) {
      navigate('/', {replace: true});
      return;
    }

    const parsedUrl = new URL(window.location.href);
    if (parsedUrl.searchParams.has('code')) {
      handleCallback(parsedUrl.searchParams.get('code')!);
    }
  }, []);

  const handleCallback = async (code: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://github-login-access-token-serverless.vercel.app/accessToken?code=${encodeURIComponent(code)}`,
        {method: 'GET'}
      );
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('gh_token', data.token);
        navigate('/', {replace: true});
      } else {
        toast({
          title: "Login failed",
          description: "Could not get access token from GitHub",
          variant: "destructive"
        });
        setLoading(false);
      }
    } catch {
      toast({
        title: "Login failed",
        description: "Something went wrong during sign in",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  const onGithubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${GitHubHelper.clientId}&scope=repo`
    );
  };

  if (loading) return <LoadingApp />;

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-6">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold gradient-text">GitHub Helper</h1>
        <p className="text-muted-foreground text-sm">Sign in to manage your repositories</p>
      </div>
      <Button
        onClick={onGithubLogin}
        className="flex items-center gap-2 px-6 py-3"
      >
        <Github className="bg-white text-black rounded-full p-1 w-6 h-6" />
        Sign in with GitHub
      </Button>
    </div>
  );
}
