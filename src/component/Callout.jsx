export const Callout = () => {
  return (
    <div className="bg-white mt-40">
      <div className="bg-cyan w-[70%] relative top-10 dinNextLtRegular  text-right flex justify-between mx-auto p-6 rounded-2xl">
        <div className="flex">
          <button className="btn bg-white hover:bg-white px-8 text-cyan">
            اشترك الآن
          </button>
          <input
            type="text"
            placeholder="ادخل ايميلك"
            className="input input-bordered w-full border-white max-w-xs placeholder-white  text-right relative top-1 mx-2"
          />
        </div>
        <div>
          <h4 className="text-white text-[24px]">
            زودنا بإيميلك حتى يوصلك أحدث العقارات والعروض{" "}
          </h4>
          <p className="text-white text-[14px] opacity-80">
            مع سوم عقار ما بيفوتك شي
          </p>
        </div>
      </div>
    </div>
  );
};
