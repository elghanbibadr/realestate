import Hero from "../component/Hero"
import { WhyUs } from "../component/WhyUs"
import { WhatWeProvide } from "../component/WhatWeProvide"
import {Background} from "../component/Background"
import {ExploreOurProperties} from "../component/ExploreOurProperties"
import Footer from "../component/Footer"

export const Home = () => {
  return (
    <>
    <main className="max-w-[1400px] mx-auto">
    <Hero/>
    <WhyUs />
    <WhatWeProvide/>
    <Background/>
    <ExploreOurProperties/>
    </main>
    <Footer/>
    </>
  )
}
