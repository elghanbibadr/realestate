import React from 'react'
import Navadvision from "../assets/vision.png"
import Navad from "../assets/nafad.png"
import globe from "../assets/globe.svg"
import { Input } from '../component/UI/Input'
import Label from '../component/UI/Label'
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
        <div className='mt-20'>
            <h2 className='text-center'>الدخول على النظام</h2>
            {/* navad surface card*/}
            <div className='w-[80%] mx-auto '>
                <div className='bg-darkGreen rounded-md mt-6 p-4'>
                    <h4 className='text-white text-[20px] text-center'>تطبيق نفاد</h4>
                </div>
                <div className='w-[90%] grid grid-cols-2 mx-auto mt-10 p-6  bg-white rounded-md'>
                <div className=''>
                <img className='h-40 mx-auto' src={lock} alt="lock icon" />
                <p className='text-textColor text-center  text-[16px]'>    الرجاء ادخال رقم بطاقة الأحوال/الاقامة ثم    <br />اضغط دخول</p>
                </div>
                <div className='text-right'>
                 {/* <Label className="text-textColor text-[16px]" text="رقم بطاقة الأحوال/الاقامة"/> */}
                 <p className='text-textColor  text-[16px]'> رقم بطاقة الأحوال/الاقامة </p>
                 <Input className="border-darkGreen my-3 text-right" placeholder="رقم بطاقة الأحوال/الاقامة " />
                 <button className="btn bg-darkGreen text-white w-full btn-accent"> تسجيل الدخول </button>
                 <p className='text-textColor  text-[16px] text-center mt-6'>لتحميل تطبيق نفاد</p>
                 <div className='grid grid-cols-3 gap-4  h-[10px]  mt-3'>
                    <img className=' h-full  w-full' src={availableonappgallery} alt="app gallery logo" />
                    <img className='h-full  w-full ' src={getitongoogleplay} alt="google play badge" />
                    <img className='h-full  w-full ' src={appstorelogo} alt="app store badge" />
                 </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
