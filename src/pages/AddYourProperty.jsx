import Label from "../component/UI/Label";
import Select from "../component/UI/Select";
import { Input } from "../component/UI/Input";
import plusIcon from "../assets/plusIcon.png";
import { useState } from "react";
import pen from "../assets/pen.png";
import { Link } from "react-router-dom";
import map from "../assets/map1.png";

export const AddYourProperty = () => {
  const [selectedSpan, setSelectedSpan] = useState(null);

  const handleClick = (index) => {
    setSelectedSpan(index);
  };

  return (
    <div className="text-right  mt-10">
      <div className="dinNextLtBold p-4 pr-20">
        <h5 className="cyanTitle text-[24px]">اعرض عقارك </h5>
        <h3 className=" text-[40px]">ابدا بيع عقارك </h3>
        <h4 className="dinNextLtRegular">
          {" "}
          ! بكل سهولة، وفريقنا بيكون معك بكل خطوة{" "}
        </h4>
      </div>

      <div>
        <div className="text-darkBlue p-4 pr-20 mt-20 bg-[#EDF2F7]  ">
          <Label className="dinNextLtRegular text-[22px]" text="نوع العقار " />
          <div className=" dinNextLtBold  cursor-pointer mt-6  text-[14px]   ">
            <span
              onClick={() => handleClick(0)}
              className={`px-14  border-x py-2  ${
                selectedSpan === 0
                  ? "bg-darkBlue rounded-md text-white"
                  : "bg-white"
              }  border-1 border-[#cccccc44]  rounded-md`}
            >
              {" "}
              شقة
            </span>
            <span
              onClick={() => handleClick(1)}
              className={`px-14   border-x py-2 mx-4  ${
                selectedSpan === 1
                  ? "bg-darkBlue rounded-md text-white"
                  : "bg-white"
              }  border-1 border-[#cccccc44]  rounded-md`}
            >
              {" "}
              دبلكس{" "}
            </span>
            <span
              onClick={() => handleClick(2)}
              className={`px-14  border-x py-2 mx-4 ${
                selectedSpan === 2
                  ? "bg-darkBlue rounded-md text-white"
                  : "bg-white"
              }  border-1 border-[#cccccc44]  rounded-md`}
            >
              {" "}
              فيلا{" "}
            </span>
            <span
              onClick={() => handleClick(3)}
              className={`px-14  border-x py-2  ${
                selectedSpan === 3
                  ? "bg-darkBlue rounded-md text-white"
                  : "bg-white"
              }  border-1 border-[#cccccc44]  rounded-md`}
            >
              {" "}
              أرض{" "}
            </span>
          </div>

          <div className="mt-12 rightDir ">
            <h5 className="cyanTitle">الموقع</h5>
            <div className="grid grid-cols-2 w-[60%]">
              <div>
                <Label className="dinNextLtRegular text-[22px]" text="الحي " />
                <Select
                  options={[
                    "الأزهار (Al-Azhaar)",
                    "البديعة (Al-Badia)",
                    "البطحاء (Al-Bataha)",
                    "الجزيرة (Al-Jazeera)",
                    "الحاير (Al-Hayir)",
                    "الحزم (Al-Hazm)",
                    "الخليج (Al-Khaleej)",
                    "الدار البيضاء (Ad-Dar Al-Bayda)",
                    "الدرعية (Ad-Dariyah)",
                    "الديرة (Ad-Deerah)",
                    "الرائد (Ar-Ra'ed)",
                    "الربوة (Ar-Rabwah)",
                    "الربيع (Ar-Rabi')",
                    " الريان (Ar-Rayan)",
                    "الزهراء (Az-Zahraa)",
                    "السلي (As-Suli)",
                    "لشهداء (Ash-Shuhada)",
                    "الشميسي (Ash-Shamisi)",
                    "الصحافة (As-Sahafah)",
                    "الفلاح (Al-Fallah)",
                    "الفواز (Al-Fawwaz)",
                    "القدس (Al-Quds)",
                    "الكوت (Al-Koot)",
                    "اللبن (Al-Lubn)",
                    "المربع (Al-Marbaa)",
                    "المرسلات (Al-Mursalat)",
                    "المرقب (Al-Marqab)",
                    "المروج (Al-Marwoj)",
                    "المروة (Al-Marwah)",
                    "المصانع (Al-Masani)",
                    "الملز (Al-Malaz)",
                    "الملقا (Al-Malqa)",
                    "المنصورة (Al-Mansourah)",
                    "الميامين (Al-Miyamin)",
                    "النخيل (An-Nakhil)",
                    "النخيل الشرقي (An-Nakhil Ash-Sharqi)",
                    "النخيل الغربي (An-Nakhil Al-Gharbi)",
                    "النسيم (An-Naseem)",
                    "النظيم (An-Nazeem)",
                    "النهضة (An-Nahdah)",
                    "الهدا (Al-Hada)",
                    "الواحة (Al-Waha)",
                    "الورود (Al-Wurud)",
                    "الياسمين (Al-Yasmin)",
                    "بدر (Badr)",
                    "جامعة الملك سعود (Jamiat Al-Malik Saud)",
                    "المغرزات (Al-Mughrazat)",
                    "لبن (Lubn)",
                    "ظهرة البديعة (Dhahrat Al-Badia)",
                    "عرق (Araq)",
                    "قرطبة (Qurtubah)",
                    "غرناطة (Quarnata)",
                    "نمار (Nammar)",
                    "الدريهمة (Ad-Darihamah)",
                    "بن تركي (Bin Turki)",
                    "السويدي (As-Suwaidi)",
                    "شبرا (Shubra)",
                    "العزيزية (Al Azizia)",
                  ]}
                />{" "}
              </div>
              <div>
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text="المنطقة"
                />
                <Select
                  options={[
                    "الرياض",
                    "جدة",
                    "مكة المكرمة",
                    "المدينة المنورة",
                    "الدمام",
                    "الخبر",
                    "الظهران",
                    "الأحساء",
                    "الطائف",
                    "بريدة",
                    "عنيزة",
                    "القصيم",
                    "الجبيل",
                    "ينبع",
                    "تبوك",
                    "حائل",
                    "النماص",
                    "أبها",
                    "خميس مشيط",
                    "نجران",
                    "جازان",
                    "القنفذة",
                    "المجمعة",
                    "الخفجي",
                    "سكاكا",
                    "رابغ",
                    "الباحة",
                  ]}
                />
              </div>
              <div>
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text=" المدينة"
                />
                <Select options={["اختيار 1", "اخيار 2", "اختيار3"]} />
              </div>
            </div>
            <h5 className="cyanTitle mt-20 mb-4"> مواصفات العقار </h5>
            <div className="grid grid-cols-2 w-[60%] gap-x-10">
              <div className="mb-6">
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text="مساحة العقار"
                />
                <Input
                  className="placeholder:text-[#5B6268]"
                  placeholder="أدخل"
                />
              </div>
              <div className="mb-6">
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text="عدد الادوار"
                />
                <Input
                  className="placeholder:text-[#5B6268]"
                  placeholder="أدخل"
                  withPen={true}
                />
              </div>
              <div className="mb-6">
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text="عمر العقار"
                />
                <Input
                  className="placeholder:text-[#5B6268]"
                  placeholder="أدخل"
                  withPen={true}
                />
              </div>
              <div className="mb-6">
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text=" عدد الغرف "
                />
                <Input
                  className="placeholder:text-[#5B6268]"
                  placeholder="أدخل"
                  withPen={true}
                />
              </div>
              <div className="mb-6">
                <Label
                  className="dinNextLtRegular text-[22px]"
                  text=" عدد المواقف"
                />
                <Input
                  className="placeholder:text-[#5B6268]"
                  placeholder="أدخل"
                  withPen={true}
                />
              </div>
              <div className="mb-6">
                <Label
                  className="dinNextLtRegular text-[22px] "
                  text="عدد الحمامات"
                />
                <Input
                  className="placeholder:text-[#5B6268]"
                  placeholder="أدخل"
                  withPen={true}
                />
              </div>
              <div className="mb-6 ">
                <Label
                  className="dinNextLtRegular text-[22px] "
                  text=" عدد المواقف"
                />
                <Input
                  placeholder="أدخل"
                  className="w-1/2 placeholder:text-[#5B6268]"
                  withPen={true}
                />
              </div>
              <div className="w-full col-span-2">
                <h5 className="cyanTitle mt-20 mb-4 text-[32px]  ">
                  اكتب لنا مواصفات عقارك
                </h5>
                <Label
                  className="dinNextLtRegular text-[29px] mt-0 "
                  text="اكتب لنا مواصفات عقارك"
                />
                <Input
                  placeholder="ادخل مواصفات دقيقة لعقارك "
                  className="pb-20 pt-6 text-[19px] w-full max-w-full  placeholder:text-[#5B6268]"
                />
              </div>
            </div>

            <div>
              <div>
                <h5 className="cyanTitle mt-20 text-[32px] mb-4 ">
                  حدد موقع عقارك{" "}
                </h5>
                <Label
                  className="dinNextLtRegular text-[29px] mt-0 "
                  text="حدد على الخريطة لدقة اكبر"
                />
                <img className="mt-6" src={map} alt="map image" />
              </div>

              <div>
                <h5 className="cyanTitle mt-20 mb-4 text-[32px]">
                  اضافة صور أو فيديو{" "}
                </h5>
                <Label
                  className="dinNextLtRegular text-[29px] mt-0 "
                  text="صور العقار "
                />

                <div>
                  <div className="flex gap-6 mt-6">
                    <div className="p-10  bg-white h-fit w-fit rounded-md">
                      <img src={plusIcon} alt="plus icon" />
                    </div>
                    <div className="p-10  bg-white h-fit w-fit rounded-md">
                      <img src={plusIcon} alt="plus icon" />
                    </div>
                    <div className="p-10  bg-white h-fit w-fit rounded-md">
                      <img src={plusIcon} alt="plus icon" />
                    </div>
                    <div className="p-10  bg-white h-fit w-fit rounded-md">
                      <img src={plusIcon} alt="plus icon" />
                    </div>
                    <div className="p-10  bg-white h-fit w-fit rounded-md">
                      <img src={plusIcon} alt="plus icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/propertyaddedsuccessfuly">
            <button className="btn bg-cyan mt-20  text-white btn-accent dinNextLtBold text-[19px] mb-10 w-[420px] hover:bg-cyan">
              {" "}
              عرض العقار
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
