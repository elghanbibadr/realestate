import Navadvision from "../assets/vision.png"
import Navad from "../assets/nafad.png"
import globe from "../assets/globe.svg"
import { Link } from "react-router-dom"
import { Input } from '../component/UI/Input'
import Label from '../component/UI/Label'
import nic from "../assets/nic.png"
import lock from "../assets/lock.svg"
import appstorelogo from "../assets/apple-app-store-logo.jpg"
import availableonappgallery from "../assets/availableonappgallery.png"
import getitongoogleplay from "../assets/google-play-badge.png"
import downloadonappstore from "../assets/downloadonappstore.png"
// import availableonappgallery from "../assets/availableonappgallery.png"

export const NavadPage = () => {
  return (
    <div>
        {/* HEADER */}
        <div className='flex bg-white p-4 justify-between items-center'>
            <div className='flex items-center'>
                <img className='h-4 mr-2' src={globe} alt="glob icon" />
                <p className='text-textColor'>English</p>
            </div>
            <div className='flex items-center '>
                <img className='h-20 mx-4' src={Navadvision} alt="navad vision image" />
                <img className='h-14' src={Navad} alt="navad image" />
            </div>
        </div>

        {/* BODY */}
        <div className='mt-20 '>
            <h2 className='text-center dinNextLtRegular font-semibold text-darkGreen text-[30px]'>الدخول على النظام</h2>
            {/* navad surface card*/}
            <div className='w-[80%] mx-auto  bg-[#F1F1F1] '>
                <div className='bg-darkGreen rounded-md mt-6 p-4'>
                    <h4 className='text-white dinNextLtRegular font-semibold text-[20px] text-center'>تطبيق نفاد</h4>
                </div>
                <div className='w-[80%] grid grid-cols-2 mx-auto mt-10 p-6 pb-10 bg-white rounded-md'>
                <div className=''>
                <img className='h-40 mx-auto' src={lock} alt="lock icon" />
                <p className='text-textColor dinNextLtRegular font-semibold text-center  text-[15px]'>    الرجاء ادخال رقم بطاقة الأحوال/الاقامة ثم    <br />اضغط دخول</p>
                </div>
                <div className='text-right'>
                 <p className='text-textColor font-semibold  text-[15px]'> رقم بطاقة الأحوال/الاقامة </p>
                 <input type="text" placeholder="ادخل رقم بطاقة الأحوال/الاقامة" className="input input-bordered input-accent border-darkGreen placeholder:opacity-30 w-full my-3 text-right mb-6" />
                 <Link to="/properties" ><button className="btn bg-darkGreen text-white w-full btn-accent hover:bg-darkGreen"> تسجيل الدخول </button></Link>
                 <p className='text-textColor dinNextLtRegular font-semibold  text-[15px] text-center mt-6'>لتحميل تطبيق نفاد</p>
                 <div className='grid grid-cols-3 gap-4   mt-4'>
                    <img className=' h-[80%] object-fill  w-full' src={availableonappgallery} alt="app gallery logo" />
                    <img className='h-[80%] object-fill  w-full ' src={getitongoogleplay} alt="google play badge" />
                    <img className='h-[80%] object-fill  w-full ' src={appstorelogo} alt="app store badge" />
                 </div>
                </div>
                </div>
          
                <div className='bg-[#C2C2C2] rounded-md mt-6 p-4'>
                    <h4 className='text-white dinNextLtRegular font-semibold text-[20px] text-center'> اسم المستخدم</h4>
                </div>
            </div>
        </div>


        {/* footer */}
        <div className='rightDir flex justify-between p-4  bg-[#F1F1F1] mt-20 py-8'>
            <div className='flex'> 
          <img className='h-12' src={nic} alt="nic image" />
          <div>
            <p className='text-black dinNextLtRegular font-semibold   text-[15px]'>تطوير وتشغيل</p>
            <h3 className='dinNextLtRegular font-semibold text-[#5E6C79] text-[21px]'>مركز المعلومات الوطني</h3>
             <p className='text-black dinNextLtRegular font-semibold   text-[15px]'>النفاد الوطني الموحد جميع الحقوق محفوظة  2023  </p> 

          </div>
            </div>
            <ul className='flex items-center justify-between w-[40%] text-textColor dinNextLtRegular font-semibold text-center  text-[15px]'>
             <Link to="/">
                 <li>الرئيسية</li>
             </Link>
             <li> حول</li>
             <li> اتصل بنا</li>
             <li> الشروط والأحكام</li>
             <li> المساعدة والدعم</li>
             <li> سياسة الخصوصية</li>
            </ul>
        </div>

    </div>
  )
}

