import property1 from "../assets/property1.png";
import property2 from "../assets/property2.png";
import property3 from "../assets/property3.png";

export const ExploreOurProperties = () => {
  return (
    <div className="text-right p-4 mt-10">
        <h5 className="text-cyan dinNextLtBold text-[24px]">اكتشف جديدنا</h5>
        <h2 className=" dinNextLtBold text-[48px] text-darkBlue">تصفح اجد عقاراتنا</h2>
        <div className="flex gap-6 mt-10">
            <img src={property1} alt="property image and description" />
            <img src={property2} alt="property image and description" />
            <img src={property3} alt="property image and description" />
            <img src={property1} alt="property image and description" />
        </div>
    </div>
  )
}
