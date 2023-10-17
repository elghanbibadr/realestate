import headerImg from "../assets/propertyShowCase.png";
import deg from "../assets/360deg.png";
import gradient from "../assets/gradient.png";
import Vector from "../assets/Vector (4).png";
import badge from "../assets/badge.svg";
import dottedgrp from "../assets/dottedGroup.png";
import appartmentmajdia from "../assets/appartmentmajdia.png";

const PropertyDetails = () => {
  return (
    <>
      <div className="relative ">
        <img className="absolute right-10 top-10" src={deg} alt="deg icon" />
        <img
          className=" h-[540px] w-full  object-fill "
          src={headerImg}
          alt="header image"
        />
        <img className="absolute left-0 top-10" src={gradient} alt="deg icon" />
      </div>
      <img
        className="mx-auto mt-10"
        src={dottedgrp}
        alt="dotted group cirlces"
      />
      <div className="grid grid-cols-2">
        <img className="self-center mx-6" src={Vector} alt="vector" />
        <img src={appartmentmajdia} alt="appartment detail image" />
      </div>

      {/* blue section */}
      <div className="bg-[#EDF2F7] h-[126px] flex gap-4 items-center rightDir mt-20 p-10">
        <img className=" mt-6" src={badge} alt="blue badge icon" />
        <div className=" ">
          <h4 className="cyanTitle dinNextLtBold text-[32px]">
            تم تقيم العقار من قبل فريقنا{" "}
          </h4>
          <p className="text-[20px] text-[#5B6268]   dinNextLtRegular">
            معلومات مضمونة وشاملة
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
