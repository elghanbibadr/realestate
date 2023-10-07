import Navbar from "./component/Navbar"
import { Home } from "./pages/Home";
import { Support } from "./pages/Support"
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <AppLayout /> */}
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="support" element={<Support />} />
        {/* <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} /> */}
      </Routes>
  </>
  )
}

export default App