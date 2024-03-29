import { LANDING_URL, LOGIN_URL,REGISTER_URL, DETAIL_URL } from "./constants/url";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Layout } from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import './App.css';


function App() {

    // return(
    //   <DetailCard movie={singleMovie}/>
    // )

   return (
     <BrowserRouter>

     {/* <Sidebar /> */}
 
      <Routes>
        <Route element={<Layout/>}>
         {/* Layout */}
         {/* <Route path={LANDING_URL} exact={true} element={
                 <LandingPage/>}/> */}
          <Route path={LANDING_URL} exact={true} element={
                <PrivateRoute>
               <LandingPage/>
              </PrivateRoute>}/>
          
          <Route path={LOGIN_URL} exact={true} element={<LoginPage />} />

          <Route path={REGISTER_URL} exact={true} element={<RegisterPage />} />

          <Route path={DETAIL_URL} exact={true} element={
              <PrivateRoute>
               <DetailPage/>
              </PrivateRoute>} />

          <Route path="*" exact={true} element={<h1> NOT FOUND</h1>} /> 
        </Route>
        {/* </Route> */}
       
       </Routes>


 </BrowserRouter>
   );
}

export default App;
