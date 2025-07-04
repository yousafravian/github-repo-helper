import {Navigate, Route, Routes} from "react-router-dom";
import Repos from "../../pages/repos/Repos";
import LayoutContainer from "../../shared/Layout";
import React from "react";

export function Content() {
  return <LayoutContainer>
    <Routes>
      <Route path='/' element={<Navigate to='/repos' replace/>}/>
      <Route path='/repos' element={<Repos/>}/>
    </Routes>
  </LayoutContainer>
}