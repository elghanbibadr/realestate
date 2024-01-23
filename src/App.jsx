import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import Support from "./pages/Support";
import Properties from "./pages/Properties";
import SupportRequestSendSuccessfuly from "./pages/SupportRequestSendSuccessfuly";
import PropertyAddedSuccessuly from "./pages/PropertyAddedSuccessuly";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Conditions from "./pages/Conditions";
import AddYourProperty from "./pages/AddYourProperty";
import PropertyDetails from "./pages/PropertyDetails";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Footer from "./component/Footer";
import Callout from "./component/Callout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function Inner() {
  return (
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/properties" element={<Properties />} />
          <Route path="/addyourproperties" element={<AddYourProperty/>} />
          <Route path="/propertydetails" element={<PropertyDetails/>} />
          <Route path="/propertyaddedsuccessfuly" element={<PropertyAddedSuccessuly/>}/>
          <Route path="/supportrequestsend" element={<SupportRequestSendSuccessfuly/>}/>
          <Route path="/map" element={<Map/>} />
          <Route path="/questions" element={<Questions/>} />
        </Routes>
  );
}

const App = () => {

  return (
      <Router>
        <Navbar/>
        <Inner/>
        <Callout/>
        <Footer/>
      </Router>
  
  );
};

export default App;
