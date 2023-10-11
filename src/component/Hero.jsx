
import { HeroCarousel } from "./HeroCarousel"
import { FilterProperties } from "./FilterProperties"
const Hero = () => {
  return (
    <div className="grid grid-cols-3 p-4 mt-20">
   
     <FilterProperties/>
     <div className="col-span-2 text-right ">
        <h5 className="text-cyan dinNextLtBold text-[24px]">سوم عقار</h5>
        <h2 className=" dinNextLtBold text-[48px]">الوجهة الأولى لكل من يرغب في تجربة تسوق عقارية فريدة</h2>
        <p className="text-textColor dinNextLtRegular text-[18px]">نسهل عليك عملية البحث عن العقار المثالي، ونوفر لك أفضل العروض العقارية. مع واجهة المستخدم البسيطة والفعالة لدينا، يمكنك الاطلاع على الخيارات المتاحة واختيار العقار المثالي لك. يمكنك مشاهدة فيديوهات مسجلة للعقارات من وسطاء عقاريين مرخصين، بحيث يمكنك الحصول على نظرة شاملة على العقار قبل الشراء.</p>
    <HeroCarousel/>
     </div>
    </div>
  )
}

export default Hero