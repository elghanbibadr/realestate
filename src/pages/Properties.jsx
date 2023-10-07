import group1 from "../assets/group1.png"
import {Input} from "../component/UI/Input"
import filterIcon from "../assets/filterIcon.png"
import searchIcon from "../assets/searchIcon.png"

export const Properties = () => {
  return (
    <div>
        <div className="text-center mt-20 ">
            <h1 className="text-[60px] text-lightBlueDark ">عقارات متوفرة في النرجس</h1>
            <h2 className="text-[34px] dinNextLtRegular text-darkBlue  ">  303 عقار معروض للبيع </h2>
            <div className="mt-10 w-fit relative flex mx-auto">
                <img className="h-12" src={filterIcon} alt="filter icon" />
            <Input className="text-right  filterProprtyInput  pl-14 pr-6  mx-3 dinNextLtRegular" placeholder="حي النرجس، الرياض " />

            <img className="absolute right-4 top-4" src={searchIcon} alt="search icon " />
            </div>
        </div>

        <div className="grid gap-10 grid-cols-2 cursor-pointer w-[70%] mx-auto mt-20">
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
         <img src={group1} alt="property group 1 image" />
        </div>
    </div>
  )
}
