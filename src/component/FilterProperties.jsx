
  import setting from "../assets/setting-4.svg"
import Label from "./UI/Label";   
import { Link } from "react-router-dom";
import Select from "./UI/Select";
import { useState } from "react";

  export function FilterProperties() {
    const [selectedSpan, setSelectedSpan] = useState(null);

    const handleClick = (index) => {
      setSelectedSpan(index);
    };


    return (
      <div className="max-w-[330px] text-right    bg-[#EDF2F7] rounded-md  h-fit mt-20">
       <ul className="flex bg-white mb-6   border-[#ccc] border-b   justify-around rounded-t-lg  flex-row-reverse  font-bold text-[18px] text-right">
              <li className="text-[#808080] dinNextLtRegular cursor-pointer py-4 " > للتأجير  </li> 
              <li className="text-darkBlue dinNextLtRegular border-darkBlue py-4 px-10 border-b-2 cursor-pointer"> للشراء </li>  
           
            </ul>
         <div className="p-4 ">
           <div className="text-darkBlue dinNextLtBold ">
              <p className="text-[16px] mb-2">نوع العقار</p>
             
               <div className="flex cursor-pointer text-[14px]  rounded-md mx-auto bg-white flex-row-reverse">
      <span
        className={`py-2 w-full text-center px-6 ${selectedSpan === 0 ? "bg-darkBlue rounded-md text-white" : ""}`}
        onClick={() => handleClick(0)}
      >
        شقة
      </span>
      <span
        className={`px-6 text-center w-full border-x py-2 border-1 border-[#cccccc44] ${
          selectedSpan === 1 ? "bg-darkBlue rounded-md  text-white" : ""
        }`}
        onClick={() => handleClick(1)}
      >
        فيلا
      </span>
      <span
        className={`py-2 w-full text-center px-6 ${selectedSpan === 2 ? "bg-darkBlue rounded-md text-white" : ""}`}
        onClick={() => handleClick(2)}
      >
        أرض
      </span>
    </div>
           </div>
                   <div className="p-0 mt-6">
                    <Label text="المنطقة" />
                    <Select options={['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة','الدمام','الخبر','الظهران','الأحساء','الطائف','بريدة','عنيزة','القصيم','الجبيل','ينبع','تبوك','حائل','النماص','أبها','خميس مشيط','نجران','جازان','القنفذة','المجمعة','الخفجي','سكاكا','رابغ','الباحة']} />
                    <Label text="الحي" />
                    <Select options={["الأزهار (Al-Azhaar)","البديعة (Al-Badia)","البطحاء (Al-Bataha)","الجزيرة (Al-Jazeera)","الحاير (Al-Hayir)","الحزم (Al-Hazm)","الخليج (Al-Khaleej)","الدار البيضاء (Ad-Dar Al-Bayda)","الدرعية (Ad-Dariyah)","الديرة (Ad-Deerah)","الرائد (Ar-Ra'ed)","الربوة (Ar-Rabwah)","الربيع (Ar-Rabi')"," الريان (Ar-Rayan)","الزهراء (Az-Zahraa)","السلي (As-Suli)","لشهداء (Ash-Shuhada)","الشميسي (Ash-Shamisi)", "الصحافة (As-Sahafah)",
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
  "العزيزية (Al Azizia)"]}/>
            <div className="mb-2 flex mt-4 items-center flex-row-reverse">
              <img src={setting} alt="setting icon" />
              <p className="text-[16px] mx-2  text-darkBlue dinNextLtRegular">  بحت متقدم </p>
            </div>
                   </div>
                   <div className="pt-0 mt-6">
            <Link to="/properties">
              <button  className="bg-darkBlue btn text-white w-full hover:bg-darkBlue " >
               بحث
              </button>
            </Link>
            </div>
         </div>
      </div>
    );
  }