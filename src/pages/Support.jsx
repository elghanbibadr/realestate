import suppoerHeaderBg from "../assets/supportHeader.png";
import Label from "../component/UI/Label";
import { Link } from "react-router-dom";
import { Input } from "../component/UI/Input";

const Support = () => {
  return (
    <div className="grid support grid-cols-2 mt-10  p-10 max-w-[1400px] mx-auto">
      <div className="dinNextLtBold">
        <h5 className="cyanTitle">الدعم</h5>
        <h3 className=" text-[40px]">واجهت مشاكل بالموقع؟</h3>
        <h4>تواصل معنا عبر تعبئة البيانات التالية:</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <Label text="الاسم" />
          <Input placeholder="أدخل" />
          <Label text="الايميل" />
          <Input type="email" placeholder="أدخل" />
          <Label text="رقم الجوال" />
          <Input placeholder="أدخل" />
          <Label text="  ملاحظتك" />
          <Input className="pb-20 pt-4" placeholder="أدخل" />
          <Link to="/supportrequestsend">
            <button className="btn block mt-5 text-white bg-darkBlue w-full max-w-xs hover:bg-darkBlue">
              ارسل
            </button>
          </Link>
        </form>
      </div>
      <div>
        <img src={suppoerHeaderBg} alt="support page hero bg" />
      </div>
    </div>
  );
};

export default Support;
