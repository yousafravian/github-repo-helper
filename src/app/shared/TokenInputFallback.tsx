import React, {useState} from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {Github} from "lucide-react";
import {GitHubHelper} from "../services/GitHubHelper";

interface TokenInputFallbackProps {
  onTokenSubmit: (token: string) => void;
}

const TokenInputFallback: React.FC<TokenInputFallbackProps> = ({onTokenSubmit}) => {
  const [token, setToken] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token) {
      localStorage.setItem('gh_token', token);
    }
    onTokenSubmit(token);
  };

  const onGithubLogin = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${GitHubHelper.clientId}&scope=repo`)
  }

  return <>
    <div className="flex justify-center items-center h-[100%]">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input type="text"
               value={token}
               onChange={(e) => setToken(e.target.value)} className="w-[400px] pl-1 py-1"
               placeholder="Enter token here"/>
        <Button type="submit" className="mt-5">Submit</Button>
        <Button type="submit" className="mt-2" onClick={onGithubLogin}><Github
          className="bg-white text-black rounded-full p-1 w-6 h-6"/>&nbsp;Sign with Github</Button>
      </form>
    </div>
  </>;
};

export default TokenInputFallback;
