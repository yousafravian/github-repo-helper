import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import './App.css';
import Header from "./header/Header";
import Repos from "./repos-list/Repos";
import {GitHubHelper} from "./services/GitHubHelper";
import {UserContext} from "./UserContext";
import UserProvider from "./UserProvider";
function App() {

    return (
        <UserProvider>
            <div className="App">
                <Header/>
                <Repos/>
            </div>
        </UserProvider>
    );
}

export default App;
