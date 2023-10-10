import React from 'react'
import propertyAddedImage from "../assets/propertyAdded.png"
export const PropertyAddedSuccessuly = () => {
  return (
    <div>

<div className="dinNextLtBold p-4 mt-20 pr-10 rightDir">
       <h5 className="cyanTitle text-[24px]">اعرض عقارك   </h5>
         <h3 className=" text-darkBlue text-[40px]" >ابدا بيع عقارك   </h3>
         <h4 className="dinNextLtRegular text-darkBlue">  بكل سهولة، وفريقنا بيكون معك بكل خطوة!  </h4>
   </div>
   <div className='text-darkBlue p-4 pr-20 mt-20 bg-[#EDF2F7] '>
   <img src={propertyAddedImage} alt="property added" />
   </div>
    </div>
  )
}
