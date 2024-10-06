import React, {useEffect} from 'react';
import './App.css';
import {ErrorBoundary} from "react-error-boundary";
import FallBackError from "./shared/FallBackError";
import UserProvider from "./services/UserProvider";
import Header from "./header/Header";
import LayoutContainer from "./shared/Layout";
import Repos from "./pages/repos/Repos";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {

  function getDarkModeEnabled() {
    return JSON.parse(localStorage.getItem("DARKMODE") ?? "false");
  }


  useEffect(() => {
    if (getDarkModeEnabled()) {
      document.body.classList.add("dark");
      localStorage.setItem("DARKMODE", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("DARKMODE");
    }
  }, []);

    return (
        <>
            <ErrorBoundary fallbackRender={FallBackError}>
                <UserProvider>
                    <Header/>
                    <LayoutContainer>
                        <Routes>
                          <Route path='/' element={<Navigate to='/repos' replace/>}/>
                          <Route path='/repos' element={<Repos/>}/>
                        </Routes>
                    </LayoutContainer>
                </UserProvider>
            </ErrorBoundary>

        </>

    )
        ;
}

export default App;