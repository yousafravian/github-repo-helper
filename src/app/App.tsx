import React, {useEffect} from 'react';
import './App.css';
import UserProvider from "./services/UserProvider";
import Header from "./layout/header/Header";
import {setTheme} from "./services/ThemeHandler";
import {Content} from "./layout/content/Content";
import {Toaster} from "./shared/toaster/Toaster";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";

function App() {

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <UserProvider>
            <Header/>
            <Content/>
          </UserProvider>
        } />
      </Routes>
      <Toaster />
    </>

  );
}

export default App;