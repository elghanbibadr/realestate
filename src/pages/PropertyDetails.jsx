import headerImg from "../assets/propertyShowCase.png";
import deg from "../assets/360deg.png";
import gradient from "../assets/gradient.png";
import Vector from "../assets/Vector (4).png";
import descframe from "../assets/descframe.png";
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

      {/* properrty desc */}
      <div className="text-right p-10 ">
        <h5 className="text-darkBlue dinNextLtRegular text-[32px]">
          وصف العقار
        </h5>
        <div className="text-darkBlue text-[19px] font-semibold rightDir mt-6  ">
          <p>
            وصف العقار عن العقار عن العقار وصف وصف العقار وصف عن العقار وصف
            العقار وصف العقار وصف العقار وصف العقار عن وصف العقار وصف العقار وصف
            العقار وصف العقار وصف عن وصف العقار عن العقار عن العقار وصف وصف
            العقار وصف عن العقار وصف العقار وصف العقار وصف العقار وصف العقار عن
            وصف العقار وصف العقار وصف العقار وصف العقار وصف عن وصف العقار عن
            العقار عن العقار وصف وصف العقار وصف عن العقار وصف العقار وصف العقار
            وصف العقار وصف العقار عن ..
          </p>
        </div>
        <div className="text-right mt-10">
          <img
            className=" relative left-[12%] "
            src={descframe}
            alt="desc of the property "
          />
        </div>
        <button className="text-darkBlue bg-white  dinNextLtRegular  border-darkBlue border-[1px] px-16 py-2 mt-10 rounded-[4px] text-[20px] ">
          تحميل بروشور العقار
        </button>
      </div>
    </>
  );
};

export default PropertyDetails;
