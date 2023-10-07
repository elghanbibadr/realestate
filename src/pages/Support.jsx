
import { input } from "@material-tailwind/react"
import suppoerHeaderBg from "../assets/supportHeader.png"
import Label from "../component/UI/Label"
import { Input } from "../component/UI/Input"
export const Support = () => {
  return (
    <div className="grid support grid-cols-2">
    
    <div className="dinNextLtBold">
     <h5 className="cyanTitle">الدعم</h5>
     <h3 className=" text-[40px]">واجهت مشاكل بالموقع؟</h3>
     <h4 >تواصل معنا عبر تعبئة البيانات التالية:</h4>
     <form >
       <Label text='الاسم' />
       <Input placeholder="أدخل" />

     </form>
    </div>
    <div>
        <img src={suppoerHeaderBg} alt="support page hero bg" />
    </div>
  </div>
  )
}
