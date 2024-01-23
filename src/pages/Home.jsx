import Hero from "../component/Hero";
import WhyUs from "../component/WhyUs";
import WhatWeProvide from "../component/WhatWeProvide";
import Background from "../component/Background";
import ExploreOurProperties from "../component/ExploreOurProperties";
import { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <>
      <main className="max-w-[1400px] mx-auto">
        <Hero />
        <WhyUs />
        <WhatWeProvide />
        <Background />
        <ExploreOurProperties />
      </main>
    </>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);