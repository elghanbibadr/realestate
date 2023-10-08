
//  const Select = ({text}) => {
//   return (
// <select className="select select-bordered bg-white  border-white flex  flex-row-reverse bg-none  w-full max-w-xs">
//   <option disabled selected>{text}</option>
//   <option>Han Solo</option>
//   <option>Greedo</option>
// </select>  )
// }

import { accordion } from "@material-tailwind/react";
import arrow from "../../assets/arrow-right.png"
// export default Select;
import React from 'react';

const Select = () => {
  return (
    <div className="relative w-[280px] ">
      <select
        className="select bg-none select-bordered bg-white px-4 border-white w-full max-w-xs appearance-none py-2 pl-8 pr-2"
      >
        <option disabled selected>
          اختر
        </option>
        <option>اختيار 1</option>
        <option>اختيار 2</option>
        <option>اختيار 3</option>
        <option>اختيار 4</option>
      </select>
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        {/* You can replace this span with an arrow icon */}
        {/* <span className="text-black ">&#711;</span> */}
        <img className="w-1/2" src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Select;
