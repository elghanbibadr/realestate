import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import { WhyUs } from "./component/WhyUs"
import { WhatWeProvide } from "./component/WhatWeProvide"
import { Background} from "./component/Background"
import { ExploreOurProperties } from "./component/ExploreOurProperties"
import Footer from "./component/Footer"
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyUs />
      <WhatWeProvide/>
      <Background/>
      <ExploreOurProperties/>
      <Footer/>
      </>
  )
}

export default App