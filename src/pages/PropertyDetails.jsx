import headerImg from "../assets/propertyShowCase.png";
import deg from "../assets/360deg.png";
import gradient from "../assets/gradient.png";
import Vector from "../assets/Vector (4).png";
import descframe from "../assets/descframe.png";
import MyMap from "../component/MyMap";
import playIcon from "../assets/playVector.png";
import downloadIcon from "../assets/downloadArrow.png";
import badr from "../assets/badr.png";
import ellipse from "../assets/Ellipse.png";
import success from "../assets/success.png";
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
      <div className="grid grid-cols-2 m-4">
        <img className="self-center mx-6" src={Vector} alt="vector" />
        <img
          className="justify-self-end"
          src={appartmentmajdia}
          alt="appartment detail image"
        />
      </div>

      {/* blue section */}
      <div className="bg-[#EDF2F7] h-[126px] flex gap-2 items-center rightDir mt-20 p-4">
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
      <div className="text-right p-4 ">
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
        <div className="text-right mt-10 flex">
          <img
            className="relative lg:mx-auto  "
            src={descframe}
            alt="desc of the property "
          />
        </div>
        <button className="text-darkBlue bg-white  dinNextLtRegular  border-darkBlue border-[1px] px-16 py-2 mt-10 rounded-[4px] text-[20px] ">
          تحميل بروشور العقار
        </button>
      </div>
      {/* take tour */}
      <div className="text-right mt-14">
        <h5 className="text-darkBlue m-5 dinNextLtRegular text-[32px]">
          خذ جولة بالعقار مع فريقنا{" "}
        </h5>
        <div className="bg-[#EDF2F7] h-[420px] text-center flex justify-center items-center mt-6">
          <img src={playIcon} alt="play a video icon" />
        </div>
      </div>

      {/* property features */}
      <div className="text-right rightDir mt-20 p-10">
        <h5 className="text-darkBlue  mb-6 dinNextLtRegular text-[32px]">
          مميزات العقار
        </h5>
        <div className="grid grid-cols-3 gap-4  grid-rows-[540px]">
          {/* cols 1 */}
          <div>
            <div className="border-[1px] py-4 h-[410px] flex flex-col justify-between rounded-md pr-6 border-[#E2EDF9]">
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> ترخيص البناء</h6>
                <img
                  className="mt-2 mx-2"
                  src={downloadIcon}
                  alt="download icon"
                />
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> شهادة اتمام البناء</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> المخططات الانشائية</h6>
                <img
                  className="mt-2 mx-2"
                  src={downloadIcon}
                  alt="download icon"
                />
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> فايبر</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> كهرباء</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> صرف صحي</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6>تمديدات كميرات خارجية</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> بدون التزامات على العقار</h6>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6 border-[#E2EDF9] border-[1px] rounded-md pr-6 py-4">
              <img src={ellipse} alt="ellipse image" />
              <div className="dinNextLtRegular font-semibold">
                <p className="text-darkBlue text-[16px]">
                  هذا العقار من ضمن مشروع تطوير
                </p>
                <button className="bg-darkBlue cursor-not-allowed opacity-60  text-[14px] mt-2 px-6 py-2 text-white rounded-md disabled">
                  عرض المشروع
                </button>
              </div>
            </div>
          </div>
          {/* cols 2 */}
          <div>
            <MyMap
              containerClassName="h-[375px] mb-2 w-full rounded-md"
              fullscreenControl={false}
            />
            <div className="border-[1px] py-4 rounded-md pr-6 border-[#E2EDF9]">
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> 200 متر عن المسجد</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> 350 متر عن اقرب حديقة</h6>
              </div>
              <div className="flex items-center  text-darkBlue text-[18px] dinNextLtRegular font-semibold ">
                <img className="mt-2" src={success} alt="blue checkmark icon" />
                <h6> 380 متر من مستشفى المملكة</h6>
              </div>
            </div>
          </div>
          {/* cols 3 */}
          <div className="text-center bg-[#EDF2F7] p-4 ">
            <img
              className="mx-auto h-[146px] w-[146px]"
              src={badr}
              alt="badr image"
            />
            <h6 className="text-darkBlue my-4 text-[21px] dinNextLtRegular font-semibold">
              تواصل مع بدر من سوم
            </h6>
            <p className="text-darkBlue  dinNextLtRegular text-[15px]  font-semibold ">
              فريقنا بيساعدك تختار افضل عقار لك، سواء كنت تدور او عينك على عقار.
              <br />
              <br />
              احنا هنا نساعدك بكل التفاصيل، انت اختار واترك الباقي علينا !
            </p>
            <div className="dinNextLtBold flex flex-col text-[19px] mt-20 text-white">
              <a target="_blank" href="https://wa.me/966504649994">
                <button className="btn bg-darkBlue w-full  btn-accent  mb-4  hover:bg-darkBlue">
                  {" "}
                  واتس اب{" "}
                </button>
              </a>
              <a target="_blank" href="https://forms.gle/RjUVjKaABhg6UCTN8">
                <button className="btn bg-cyan w-full  btn-accent   hover:bg-cyan">
                  {" "}
                  حجز موعد زيارة{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
