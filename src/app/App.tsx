import React, {useEffect} from 'react';
import './App.css';
import {ErrorBoundary} from "react-error-boundary";
import FallBackError from "./shared/FallBackError";
import UserProvider from "./services/UserProvider";
import Header from "./layout/header/Header";
import {setTheme} from "./services/ThemeHandler";
import {Content} from "./layout/content/Content";
import {Toaster} from "./shared/toaster/Toaster";

function App() {

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <ErrorBoundary fallbackRender={FallBackError}>
        <UserProvider>
          <Header/>
          <Content/>
        </UserProvider>
      </ErrorBoundary>
      <Toaster />
    </>

  );
}

export default App;