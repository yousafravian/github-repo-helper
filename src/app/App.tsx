import React from 'react';
import './App.css';
import {ErrorBoundary} from "react-error-boundary";
import FallBackError from "./shared/FallBackError";
import UserProvider from "./services/UserProvider";
import Header from "./header/Header";
import LayoutContainer from "./shared/Layout";
import Repos from "./repos-list/Repos";

function App() {

    return (
        <>
            <ErrorBoundary fallbackRender={FallBackError}>
                <UserProvider>
                    <Header/>
                    <LayoutContainer>
                       <Repos/>
                    </LayoutContainer>
                </UserProvider>
            </ErrorBoundary>

        </>

    )
        ;
}

export default App;
{/*<div>
                <svg viewBox="0 0 1024 1024" className="aa ci dp ed oz ta vf" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fill-opacity="0.7"></circle>
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stop-color="#7775D6"></stop>
                            <stop offset="1" stop-color="#E935C1" stop-opacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>*/}