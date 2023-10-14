
import Label from "../component/UI/Label"
import Select from "../component/UI/Select"
import { Input } from "../component/UI/Input"
import plusIcon from "../assets/plusIcon.png"
import { useState } from "react"
import { Link } from "react-router-dom"
import map from "../assets/map1.png"

export const AddYourProperty = () => {
  const [selectedSpan, setSelectedSpan] = useState(null);

  const handleClick = (index) => {
    setSelectedSpan(index);
  };

  return (
    <div className="text-right  mt-10">
   <div className="dinNextLtBold p-4">
       <h5 className="cyanTitle text-[24px]">اعرض عقارك   </h5>
         <h3 className=" text-[40px]" >ابدا بيع عقارك   </h3>
         <h4 className="dinNextLtRegular">  بكل سهولة، وفريقنا بيكون معك بكل خطوة!  </h4>
   </div>

   <div>
   <div className="text-darkBlue p-4 pr-20 mt-20 bg-[#EDF2F7]  ">
             <Label className="dinNextLtRegular text-[22px]" text="نوع العقار " />
              <div className=" dinNextLtBold  cursor-pointer mt-6  text-[14px]   ">
                  <span onClick={() => handleClick(0)} className={`px-14  border-x py-2  ${selectedSpan === 0 ? "bg-darkBlue rounded-md text-white" : "bg-white"}  border-1 border-[#cccccc44]  rounded-md` }> شقة</span>
                  <span onClick={() => handleClick(1)} className={`px-14   border-x py-2 mx-4  ${selectedSpan === 1 ? "bg-darkBlue rounded-md text-white" : "bg-white"}  border-1 border-[#cccccc44]  rounded-md` }>  دبلكس   </span>
                  <span onClick={() => handleClick(2)} className={`px-14  border-x py-2 mx-4 ${selectedSpan === 2 ? "bg-darkBlue rounded-md text-white" : "bg-white"}  border-1 border-[#cccccc44]  rounded-md` }> فيلا </span>
                  <span onClick={() => handleClick(3)} className={`px-14  border-x py-2  ${selectedSpan === 3 ? "bg-darkBlue rounded-md text-white" : "bg-white"}  border-1 border-[#cccccc44]  rounded-md` }>  أرض </span>
                  {/* <span className="px-12 mx-4 border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md ">  دبلكس   </span>
                  <span className="px-12 mx-4 border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md ">  فيلا < /span>
                  <span className="px-12 mx-4 border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md "> أرض </span> */}
              </div>
                   
     

              <div className="mt-12 rightDir ">
                  <h5 className="cyanTitle">الموقع</h5>
                  <div className="grid grid-cols-2 w-[60%]">
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="الحي " />
                       <Select options={["اختيار 1" ,"اخيار 2","اختيار3"]}  />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="المنطقة" />
                       <Select  options={["اختيار 1" ,"اخيار 2","اختيار3"]} />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text=" المدينة" />
                       <Select   options={["اختيار 1" ,"اخيار 2","اختيار3"]} />
                      </div>
                  </div>
                  <h5 className="cyanTitle mt-20">  مواصفات العقار  </h5>
                  <div className="grid grid-cols-2 w-[60%]">
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="مساحة العقار" />
                       <Input placeholder="أدخل"  />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="عدد الادوار" />
                       <Input placeholder="أدخل"   />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="عمر العقار" />
                       <Input placeholder="أدخل"   />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text=" عدد الغرف "  />
                       <Input  placeholder="أدخل"  />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text=" عدد المواقف" />
                       <Input placeholder="أدخل"  />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="عدد الحمامات" />
                      <Input placeholder="أدخل"  />

                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text=" عدد المواقف" />
                      <Input placeholder="أدخل"  />

                      </div>
                    
                  </div>
               
                <div>
                 <div >
                   <h5 className="cyanTitle mt-20">
                   اكتب لنا مواصفات عقارك
                     </h5>
                        <Label className="dinNextLtRegular text-[22px] mt-0 " text="اكتب لنا مواصفات عقارك" />
                        <Input placeholder="ادخل مواصفات دقيقة لعقارك " className="pb-20 pt-6 "  />
                 </div>
                 <div >
                   <h5 className="cyanTitle mt-20 ">
حدد موقع عقارك                     </h5>
                        <Label className="dinNextLtRegular text-[22px] mt-0 " text="حدد على الخريطة لدقة اكبر" />
                  <img src={map} alt="map image" />
                  </div>

                  <div>
                  <h5 className="cyanTitle mt-20 ">
                  اضافة صور أو فيديو                    </h5>
                        <Label className="dinNextLtRegular text-[22px] mt-0 " text="صور العقار "/>
                   
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
              <Link to="/propertyaddedsuccessfuly"><button className="btn bg-cyan mt-20  text-white btn-accent w-[450px] hover:bg-cyan"> عرض العقار</button></Link>

           </div>
   </div>
    </div>
  )
}
