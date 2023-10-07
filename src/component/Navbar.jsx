import En from "../assets/En.png"
import Menu from "../assets/Menu.png"
import logo from "../assets/logo.png"
import icon from "../assets/icon-house.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [navOpen ,setNavOpen]=useState(false)

  return (
    <header className="p-4 bg-white ">
    <nav className="flex justify-between ">
    <ul className="text-darkBlue w-[40%] flex items-center justify-between font-bold text-[16px]">
        <li className="bg-darkBlue text-white flex items-center py-2 px-4 rounded-full font-light"> <img className="h-5 w-5 mr-2" src={icon} alt="icon-house" /> <Link to="/showyourproperty"><button className="">اعرض عقارك</button></Link> </li>
        <li className="text-darkBlue">تسجيل دخول </li>
        <li> <img className="h-10" src={En} alt="change language icon" /> </li>
        <li>الخريطة</li>
        <li>العقارات</li>
        <li>الرئيسية</li>
    </ul>
    <div className="flex  items-center">
         <img className="h-10 mr-6" src={logo} alt="soum logo" />
        <img onClick={() => setNavOpen(true)} className="h-6 cursor-pointer" src={Menu} alt="hamburger menu" />
    </div>
    </nav>
  {navOpen &&   <ul className=" absolute  z-10 bg-darkBlue p-20 text-white text-[48px] text-right  h-full w-full inset-0 ">
      <Link to="/support" onClick={() => setNavOpen(false)}>
        <li className="cursor-pointer  hover:text-cyan">الدعم</li>
      </Link>
      <Link to="/privacyPolicy" onClick={() => setNavOpen(false)}>
        <li className="cursor-pointer  hover:text-cyan">سياسة الخصوصية</li>
      </Link>
      <Link to="/conditions" onClick={() => setNavOpen(false)}>
        <li className="cursor-pointer  hover:text-cyan">الشروط و الأحكام</li>
      </Link>
      <li className="cursor-pointer  hover:text-cyan">أسئلة شائعة</li>
    </ul>}
    </header>
  )
}

export default Navbar