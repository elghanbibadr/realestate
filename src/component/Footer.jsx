import logoWhite from "../assets/soumFooterLogo.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import tiktok from "../assets/tik_tok.png"
import whatsapp from "../assets/whatsapp.png"
import line from "../assets/line 1.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-right   p-4 pt-24">
      <div className=" flex  justify-evenly w-1/2 ">
      <div>
          <img src={logoWhite} alt="soum white logo" />
          <ul>
            <li>موقع سوم عقار برقم رخصة 000 0000 000   </li>
            <li >   تواصل معنا  على   <b className="text-cyan">Contact@SoumAqar.sa</b></li>
             </ul>
             <div className="flex items-center  mt-6 justify-between w-1/2">
              <a target="_blank" href="https://www.tiktok.com/@soumaqar?_t=8gG4hSEYDNh&_r=1">
                <img src={tiktok} alt="twitter icon" />
              </a>
              <a target="_blank" href="https://instagram.com/soumaqar?igshid=MzRlODBiNWFlZA=="><img src={instagram} alt="twitter icon" /></a>
              <a target="_blank" href="https://x.com/soumaqar?s=21&t=3FI4TtL_IYnC6NntJvy8Rw"><img src={twitter} alt="twitter icon" /></a>
             </div>
          </div>
          <ul className="footerPageLink">
              <h6 className="text-white text-[20px]">الروابط</h6>
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/">
                <li>الرئيسية</li>
              </Link>
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/conditions">
                <li>الشروط والاحكام</li>
              </Link>
              <Link onClick={() =>  window.scrollTo(0, 0)}  to="/privacyPolicy">
                <li>سياسة الخصوصية</li>
              </Link>
              <li>الأسئلة الشائعة</li>
          </ul>
          
        </div>
      <img className="mt-10" src={line} alt="line illustration" />
      <p className="text-center mt-8">جميع الحقوق محفوظة لسوم عقار © 2023</p>
    </footer>
  )
}

export default Footer