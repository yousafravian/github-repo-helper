import React, {useEffect, useState} from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";

interface TokenInputFallbackProps {
    onTokenSubmit: (token: string) => void;
}

const TokenInputFallback: React.FC<TokenInputFallbackProps> = ({ onTokenSubmit }) => {
    const [token, setToken] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(token) {
          localStorage.setItem('gh_token', token);
        }
        onTokenSubmit(token);
    };

    return <>
      <div className="flex justify-center items-center h-[100%]">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input type="text"
                 value={token}
                 onChange={(e) => setToken(e.target.value)} className="w-[400px] pl-1 py-1" placeholder="Enter token here" />
          <Button type="submit" className="mt-5">Submit</Button>
        </form>
      </div>
    </>;
};

export default TokenInputFallback;
