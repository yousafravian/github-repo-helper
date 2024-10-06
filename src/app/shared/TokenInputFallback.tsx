import React, {useEffect, useState} from "react";

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
          <label className="text-white flex pl-1">
            Please enter your GitHub token
          </label>
          <input
            className="outline-0 border-0 w-[400px] pl-1 py-1"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button className="bg-gray-300 p-2 mt-4 rounded" type="submit">Submit</button>
        </form>
      </div>

    </>;
};

export default TokenInputFallback;
