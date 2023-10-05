import logoWhite from "../assets/soumFooterLogo.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import tiktok from "../assets/tik_tok.png"
import whatsapp from "../assets/whatsapp.png"
import line from "../assets/line 1.png"
const Footer = () => {
  return (
    <footer className="bg-darkBlue text-right  mt-10 p-4 pt-24">
      <div className=" flex  justify-evenly w-1/2 ">
      <div>
          <img src={logoWhite} alt="soum white logo" />
          <ul>
            <li>موقع سوم عقار برقم رخصة 000 0000 000   </li>
            <li >   تواصل معنا  على   <b className="text-cyan">Contact@SoumAqar.sa</b></li>
             </ul>
             <div className="flex items-center  mt-6 justify-between w-1/2">
              <img src={tiktok} alt="twitter icon" />
              <img src={whatsapp} alt="twitter icon" />
              <img src={instagram} alt="twitter icon" />
              <img src={twitter} alt="twitter icon" />
             </div>
          </div>
          <ul className="footerPageLink">
              <h6 className="text-white text-[20px]">الروابط</h6>
              <li>الرئيسية</li>
              <li>الشروط والاحكام</li>
              <li>سياسة الخصوصية</li>
              <li>الأسئلة الشائعة</li>
          </ul>
          
        </div>
      <img className="mt-10" src={line} alt="line illustration" />
      <p className="text-center mt-8">جميع الحقوق محفوظة لسوم عقار © 2023</p>
    </footer>
  )
}

export default Footer