
  import setting from "../assets/setting-4.svg"
import Label from "./UI/Label";   
import Select from "./UI/Select";

  export function FilterProperties() {


    return (
      <div className="max-w-[330px] text-right    bg-[#EDF2F7] rounded-md  h-fit mt-20">
       <ul className="flex bg-white mb-6   border-[#ccc] border-b   justify-around rounded-t-lg  flex-row-reverse  font-bold text-[18px] text-right">
              <li className="text-[#808080] dinNextLtRegular cursor-pointer py-4 " > للتأجير  </li> 
              <li className="text-darkBlue dinNextLtRegular border-darkBlue py-4 px-10 border-b-2 cursor-pointer"> للشراء </li>  
           
            </ul>
         <div className="p-4 px-10">
           <div className="text-darkBlue dinNextLtBold ">
              <p className="text-[16px] mb-2">نوع العقار</p>
              <div className="flex cursor-pointer text-[14px] justify-evenly  rounded-md mx-auto  bg-white flex-row-reverse">
                  <span className=" py-2">شقة</span>
                  <span className="px-6 border-x py-2  border-1 border-[#cccccc44]">  فيلا</span>
                  <span className=" py-2"> أرض</span>
              </div>
           </div>
                   <div className="p-0 mt-6">
                    <Label text="المنطقة" />
                    <Select/>
                    <Label text="الحي" />
                    <Select/>
            <div className="mb-2 flex mt-4 items-center flex-row-reverse">
              <img src={setting} alt="setting icon" />
              <p className="text-[16px] mx-2  text-darkBlue dinNextLtRegular">  بحت متقدم </p>
            </div>
                   </div>
                   <div className="pt-0 mt-6">
            <button  className="bg-darkBlue btn text-white w-full " >
              بحت
            </button>
                   
                   </div>
         </div>
      </div>
    );
  }