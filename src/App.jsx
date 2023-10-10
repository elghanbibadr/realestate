import Navbar from "./component/Navbar"
import { Home } from "./pages/Home";
import { Support } from "./pages/Support"
import { PropertyAddedSuccessuly } from "./pages/PropertyAddedSuccessuly";
import { Properties } from "./pages/Properties";
import { Conditions } from "./pages/Conditions";
import Map from "./pages/Map";
import { SHowYourProperty } from "./pages/SHowYourProperty";
// import { SHowYourProperty } from "./pages/SHowYourProperty";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { AddYourProperty } from "./pages/AddYourProperty";
import { NavadPage } from "./pages/NavadPage";
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <AppLayout /> */}
    <Navbar />
      <Routes>
        <Route index element={<Map/>} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="support" element={<Support />} />
        <Route path="conditions" element={<Conditions />} />
        <Route path="showyourproperty" element={<SHowYourProperty/>} />
        <Route path="properties" element={<Properties/>} />
        {/* <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} /> */}
      </Routes>
  </>
  )
}

export default App