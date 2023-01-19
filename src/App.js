import React from "react";
import { Route , Routes } from "react-router-dom";
import { Home_PAGE , REGISTER_PAGE , LOGIN_PAGE , WRONG_PAGE } from "./Components";
function  App() {
  return(
<>
    <Routes>
      <Route  path = "/" element={<Home_PAGE/>}/>
      <Route  path = "/home" element={<Home_PAGE/>}/>
      <Route  path = "/register" element={<REGISTER_PAGE/>}/>
      <Route  path = "/login" element={<LOGIN_PAGE/>}/>
      <Route  path = "*" element={<WRONG_PAGE/>}/>
    </Routes>
    </>

  )
}


export default App;
