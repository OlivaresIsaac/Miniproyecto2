import { LANDING_URL, LOGIN_URL,REGISTER_URL } from "./constants/url";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import './App.css';
import { useEffect } from "react";
import { fetchMovies } from "./utils/api";
import { useMovies } from "./hooks/useMovies";

function App() {

  return (
  

    <BrowserRouter>

    {/* <Sidebar /> */}
 
      <Routes>
        {/* Layout */}
        {/* <Route element={<Layout/>}> */}

          <Route path={LANDING_URL} exact={true} element={<LandingPage />} />
          
          <Route path={LOGIN_URL} exact={true} element={<LoginPage />} />

          <Route path={REGISTER_URL} exact={true} element={<RegisterPage />} />

          <Route path="*" exact={true} element={<h1> NOT FOUND</h1>} /> 

        {/* </Route> */}
       
      </Routes>


</BrowserRouter>
  );
}

export default App;
