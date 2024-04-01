import React from 'react';
import './App.css';
import Header from "./header/Header";
import Repos from "./repos-list/Repos";
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
