import En from "../assets/En.png"
import Menu from "../assets/Menu.png"
import logo from "../assets/logo.png"
import icon from "../assets/icon-house.png"

const Navbar = () => {
  return (
    <header className="p-4 bg-white">
    <nav className="flex justify-between ">
    <ul className="text-darkBlue w-[40%] flex items-center justify-between font-bold text-[16px]">
        <li className="bg-darkBlue text-white flex items-center py-2 px-4 rounded-full font-light"> <img className="h-5 w-5 mr-2" src={icon} alt="icon-house" /> <button className="">اعرض عقارك</button> </li>
        <li className="text-darkBlue">تسجيل دخول </li>
        <li> <img className="h-10" src={En} alt="change language icon" /> </li>
        <li>الخريطة</li>
        <li>العقارات</li>
        <li>الرئيسية</li>
    </ul>
    <div className="flex  items-center">
         <img className="h-10 mr-6" src={logo} alt="soum logo" />
        <img className="h-6" src={Menu} alt="hamburger menu" />
    </div>
    </nav>
    </header>
  )
}

export default Navbar