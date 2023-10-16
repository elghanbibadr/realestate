import { lazy, Suspense } from "react";
import Navbar from "./component/Navbar";
import { Home } from "./pages/Home";
import Questions from "./pages/Questions";
import Footer from "./component/Footer";
import { Callout } from "./component/Callout";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Map = lazy(() => import("./pages/Map"));
const Support = lazy(() => import("./pages/Support"));
const Loggin = lazy(() => import("./pages/Loggin"));
const Properties = lazy(() => import("./pages/Properties"));
const SupportRequestSendSuccessfuly = lazy(() =>
  import("./pages/SupportRequestSendSuccessfuly")
);
const PropertyAddedSuccessuly = lazy(() =>
  import("./pages/PropertyAddedSuccessuly")
);

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Conditions = lazy(() => import("./pages/Conditions"));
const AddYourProperty = lazy(() => import("./pages/AddYourProperty"));
const NavadPage = lazy(() => import("./pages/NavadPage"));

const App = () => {
  const location = useLocation();
  const isNavadPage = location.pathname.includes("/navad");

  return (
    <Suspense>
      {isNavadPage ? null : <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="support" element={<Support />} />
        <Route path="conditions" element={<Conditions />} />
        <Route path="login" element={<Loggin />} />
        <Route path="properties" element={<Properties />} />
        <Route path="addyourproperties" element={<AddYourProperty />} />
        <Route
          path="propertyaddedsuccessfuly"
          element={<PropertyAddedSuccessuly />}
        />
        <Route
          path="supportrequestsend"
          element={<SupportRequestSendSuccessfuly />}
        />
        <Route path="navad" element={<NavadPage />} />
        <Route path="map" element={<Map />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
      {/* </Suspense> */}
      {isNavadPage ? null : (
        <>
          <Callout />
          <Footer />
        </>
      )}
    </Suspense>
  );
};

export default App;
