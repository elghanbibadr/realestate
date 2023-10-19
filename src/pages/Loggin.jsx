import suppoerHeaderBg from "../assets/supportHeader.png";
import Label from "../component/UI/Label";
import { Input } from "../component/UI/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Loggin = () => {
  const [userLoggedIn, setIsUserLoggedIn] = useState(false);

  const hanldeFormSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  return (
    <div className="grid support grid-cols-2 mt-10 p-10">
      <div className="dinNextLtBold">
        <h5 className="cyanTitle"> تسجيل جديد </h5>
        <h3 className=" text-[40px]"> سجل مع عقار سوم </h3>
        <h4 className="text-[28px] dinNextLtRegular">
          وتمكن من عرض عقاراتك بكل سهولة واحترافية{" "}
        </h4>
        <form onSubmit={hanldeFormSubmit}>
          <Label text="رقم الجوال" />
          <Input
            className="border-darkBlue appearance-none hover:appearance-none focus:appearance-none"
            type="number"
            placeholder="0550505055"
          />

          {userLoggedIn && (
            <>
              <Label className="mt-4" text="رمز التحقق" />
              <Input
                className="border-darkBlue "
                type="number"
                placeholder="xxxx"
              />
            </>
          )}

          {!userLoggedIn && (
            <button className="btn block mt-5 text-white bg-darkBlue w-full max-w-xs hover:bg-darkBlue">
              {" "}
              تسجيل
            </button>
          )}
          {userLoggedIn && (
            <Link to="/navad">
              <button className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen">
                {" "}
                توثيق عن طريق نفاذ
              </button>
            </Link>
          )}
        </form>
      </div>
      <div className="w-[80%]">
        <img src={suppoerHeaderBg} alt="support page hero bg" />
      </div>
    </div>
  );
};

export default Loggin;
