import Phones from "../assets/phones.png"
export const WhatWeProvide = () => {
  return (
    <div className="text-right grid grid-cols-2 p-4 mt-20">
        <div>
            <img className="" src={Phones} alt="phones illustration" />
        </div>
        <div>
            <h2 className="dinNextLtRegular mb-10 text-cyan text-[48px]">سوم العقار تطبيقك الأمثل للعقارات ايش نقدم لك؟</h2>
            <ul className="flex flex-row-reverse  font-bold text-[18px] text-right">
              <li className="text-[#808080] dinNextLtBold px-20 border-b">كبائع في عقار سوم</li> 
              <li className="text-darkBlue dinNextLtBold ">كمشتري</li>  
           
            </ul>
            <div>
            <svg className="w-[400px] relative left-60 mt-2"  viewBox="0 0 604 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1.5H302" stroke="#161042" stroke-width="3" stroke-linecap="round"/>
<path d="M302 1.5H602" stroke="#808080" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
            <p className="dinNextLtRegular text-[22px] mt-6 text-darkBlue">خدمة عملاء رائعة 24/7 احنا نتعامل مع كل شيء عنك من الألف إلى الياء  <br />نقدر نبيع عقاراتك بشكل أسرع من البقية  <br />لوحة تحكم لوكلاء العقارات المتعاونين مع سوم</p>
     

        </div>
    </div>
  )
}
