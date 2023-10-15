import carouselImage1 from "../assets/modern-bedroom-suite-hotel1.png";
import arrow from "../assets/arrow-right.png";
export const HeroCarousel = () => {
  return (
    <div className="carousel w-[80%]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={carouselImage1} className="w-full" />
        <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn bg-white border-white btn-circle">
            <img className="rotate-90" src={arrow} />
          </a>
          <a href="#slide2" className="btn bg-white btn-circle border-white">
            <img src={arrow} />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={carouselImage1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn bg-white  btn-circle">
            <img src={arrow} />
          </a>
          <a href="#slide3" className="btn bg-white btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={carouselImage1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn bg-white btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn bg-white btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={carouselImage1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn bg-white btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-white btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
