
import Label from "../component/UI/Label"
import Select from "../component/UI/Select"
import { Input } from "../component/UI/Input"
import map from "../assets/map1.png"
export const AddYourProperty = () => {
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
              <div className=" dinNextLtBold cursor-pointer mt-6  text-[14px]   ">
                  <span className="px-12  border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md ">  فيلا</span>
                  <span className="px-12 mx-4 border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md ">  فيلا</span>
                  <span className="px-12 mx-4 border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md ">  فيلا</span>
                  <span className="px-12 mx-4 border-x py-2  border-1 border-[#cccccc44] bg-white rounded-md ">  فيلا</span>
              </div>

              <div className="mt-12 rightDir ">
                  <h5 className="cyanTitle">الموقع</h5>
                  <div className="grid grid-cols-2 w-[60%]">
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="الحي " />
                       <Select  />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text="المنطقة" />
                       <Select  />
                      </div>
                      <div>
                      <Label className="dinNextLtRegular text-[22px]" text=" المدينة" />
                       <Select  />
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

                </div>
              </div>
           </div>
   </div>
    </div>
  )
}
