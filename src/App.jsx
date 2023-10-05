import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import { WhyUs } from "./component/WhyUs"
import { WhatWeProvide } from "./component/WhatWeProvide"
import { Callout } from "./component/Callout"

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyUs />
      <WhatWeProvide/>
      <Callout/>
      </>
  )
}

export default App