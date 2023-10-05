import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import { WhyUs } from "./component/WhyUs"
import { WhatWeProvide } from "./component/WhatWeProvide"
import { Callout } from "./component/Callout"
import { ExploreOurProperties } from "./component/ExploreOurProperties"

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyUs />
      <WhatWeProvide/>
      <Callout/>
      <ExploreOurProperties/>
      </>
  )
}

export default App