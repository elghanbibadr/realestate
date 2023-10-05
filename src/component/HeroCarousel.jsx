import { Carousel } from "@material-tailwind/react";
 import carouselImage1 from "../assets/modern-bedroom-suite-hotel1.png"
export function HeroCarousel() {
  return (
    <Carousel
      className="rounded-xl h-[490px]  relative left-6  overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute  bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-12 bg-darkBlue" : "w-12 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
      src={carouselImage1}
      
        alt="image 1"
        className="h-full w-full object-contain"
      />
      <img
        src={carouselImage1}
        alt="image 2"
        className="h-full w-full object-contain"
      />
      <img
        src={carouselImage1}
        alt="image 3"
        className="h-full w-full object-contain"
      />
      <img
        src={carouselImage1}
        alt="image 3"
        className="h-full w-full object-contain"
      />
    </Carousel>
  );
}