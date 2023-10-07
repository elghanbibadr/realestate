

import suppoerHeaderBg from "../assets/supportHeader.png"
import Label from "../component/UI/Label"
import { Input } from "../component/UI/Input"
export const SHowYourProperty = () => {
  return (
    <div className="grid support grid-cols-2 mt-10 p-4">
    
    <div className="dinNextLtBold">
     <h5 className="cyanTitle"> تسجيل جديد </h5>
     <h3 className=" text-[40px]"> سجل مع عقار سوم </h3>
     <h4 >وتمكن من عرض عقاراتك بكل سهولة واحترافية  </h4>
     <form >
     
       <Label text="رقم الجوال"/>
       <Input className="border-darkBlue appearance-none hover:appearance-none focus:appearance-none" type="number"  placeholder="0550505055"  />
      
       <button className="btn block mt-5 text-white bg-darkBlue w-full max-w-xs">   تسجيل</button>
     </form>
    </div>
    <div>
        <img src={suppoerHeaderBg} alt="support page hero bg" />
    </div>
  
  </div>
  )
}
