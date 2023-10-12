// import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
// import './App.css';
import Navbar from './component/Navbar';
import { Home } from './pages/Home';
import { Support } from './pages/Support';
import { PropertyAddedSuccessuly } from './pages/PropertyAddedSuccessuly';
import { Properties } from './pages/Properties';
import { Conditions } from './pages/Conditions';
import Map from './pages/Map';
import { Loggin } from './pages/Loggin';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { useLocation } from 'react-router-dom';
import { AddYourProperty } from './pages/AddYourProperty';
import { NavadPage } from './pages/NavadPage';
import { Routes, Route, Outlet } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const isNavadPage = location.pathname.includes('/navad');

  return (
    <>
      {isNavadPage ? null : <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="support" element={<Support />} />
        <Route path="conditions" element={<Conditions />} />
        <Route path="login" element={<Loggin />} />
        <Route path="properties" element={<Properties />} />
        <Route path="addyourproperties" element={<AddYourProperty />} />
        <Route path="propertyaddedsuccessfuly" element={<PropertyAddedSuccessuly />} />
        <Route path="navad" element={<NavadPage />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </>
  );
};

export default App;