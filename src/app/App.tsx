import React from 'react';
import './App.css';
import Header from "./header/Header";
import Repos from "./repos-list/Repos";
import UserProvider from "./services/UserProvider";
import LayoutContainer from "./shared/Layout";
function App() {

    return (
        <UserProvider>
            <div className="App">
                <Header/>
                <LayoutContainer>
                    <Repos/>
                </LayoutContainer>
            </div>
        </UserProvider>
    );
}

export default App;
