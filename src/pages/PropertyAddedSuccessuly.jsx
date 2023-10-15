import emailSent from "../assets/emailsent.png";

export const PropertyAddedSuccessuly = () => {
  return (
    <div>
      <div className="dinNextLtBold p-4 mt-6 pr-10 rightDir">
        <h5 className="cyanTitle text-[24px]">اعرض عقارك </h5>
        <h3 className=" text-darkBlue text-[40px]">ابدا بيع عقارك </h3>
        <h4 className="dinNextLtRegular text-darkBlue">
          {" "}
          ! بكل سهولة، وفريقنا بيكون معك بكل خطوة{" "}
        </h4>
      </div>
      <div className="text-darkBlue grid grid-cols-2 items-center   p-4 pr-20 mt-20 bg-[#EDF2F7] ">
        <img
          className="w-1/2 h-[80%] self-end justify-self-end"
          src={emailSent}
          alt="property added"
        />
        <div className="justify-self-center">
          <h2 className="text-darkBlue text-right text-[42px] dinNextLtBold">
            تم ارسال عقارك لنا بنجاح،
          </h2>
          <h3 className="dinNextLtRegular text-right  text-darkBlue text-[22px]">
            سيتم مراجعة المعلومات و ثم التواصل معك من قبل
            <br /> فريقنا خلال 24ساعة لتحديد الخطوات القادمة !
          </h3>
        </div>
      </div>
    </div>
  );
};
