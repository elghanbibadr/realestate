import carouselImage1 from "../assets/modern-bedroom-suite-hotel1.png";
import arrow from "../assets/arrow-right.png";
import { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class HeroCarousel extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="carousel w-[80%]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={carouselImage1} className="w-full" />
          <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn bg-white border-white btn-circle">
              <img className="rotate-90 h-5 w-5" src={arrow} />
            </a>
            <a href="#slide2" className="btn bg-white btn-circle border-white">
              <img className="-rotate-90 h-5 w-5" src={arrow} />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={carouselImage1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn bg-white  btn-circle border-white">
              <img className="rotate-90 h-5 w-5" src={arrow} />
            </a>
            <a href="#slide3" className="btn bg-white btn-circle border-white">
              <img className="-rotate-90 h-5 w-5" src={arrow} />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={carouselImage1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn bg-white btn-circle border-white">
              <img className="rotate-90 h-5 w-5" src={arrow} />
            </a>
            <a href="#slide4" className="btn bg-white btn-circle border-white">
              <img className="-rotate-90 h-5 w-5" src={arrow} />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={carouselImage1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn bg-white btn-circle border-white">
              <img className="rotate-90 h-5 w-5" src={arrow} />
            </a>
            <a href="#slide1" className="btn bg-white btn-circle border-white">
              <img className="-rotate-90 h-5 w-5" src={arrow} />
            </a>
          </div>
        </div>
      </div>
    ); 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroCarousel);