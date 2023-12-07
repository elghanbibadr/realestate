import suppoerHeaderBg from "../assets/supportHeader.png";
import Label from "../component/UI/Label";
import { Input } from "../component/UI/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import  NicLogo from "../assets/NIC-logo.png";
import Swal from 'sweetalert2';
import axios from "axios";

const Loggin = () => {
  const [nafathChecked, setIsNafathChecked] = useState(false);
  const [validNationalId, setIsValidNationalId] = useState(false); 
  const [nationalId, setNationalId] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nationalIdRegex = new RegExp("^[1|2]{1}[0-9]{9}$");
  const apiBaseUrl = "https://api.soumaqar.sa/api/v1/";
  let timerInterval;
  let pullUserInfoInterval;

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    if(validNationalId){
  
      try{
        setIsLoading(true);
        const response = await axios.post(
          apiBaseUrl + "auth/login-request",
          {nationalId: nationalId}
          );
        
        saveWithExpiry("transId", response.data.token.transId, 60000);
        saveWithExpiry("requestId", response.data.token.requestId, 60000);
        saveWithExpiry("random", response.data.token.random, 60000);
        setIsLoading(false);
        showSwalPopUp();
      }catch(e){
        setIsLoading(false);
        Swal.fire({
          title: "<strong>عذرًا حصل خطأ اثناء التحقق من النفاذ الوطني الموحد</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
      });
      }

    }
  };

  const handleFormChange = (e) => {
    if(e.target.value.length <= 10){
      setNationalId(e.target.value);
    }
    if(nationalIdRegex.test(e.target.value)){
      setIsValidNationalId(true);
    }
    else{
      setIsValidNationalId(false);
    }
  }

  const showSwalPopUp = () => {
    Swal.fire({
      title: "<strong> الرجاء استخدام تطبيق نفاذ واختيار الرقم التالي " + getWithExpiry("random") + "</strong>",
      html: "<b></b>",
      icon: "info",
      showCloseButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 60000,
      timerProgressBar: false,
      didOpen: () => {
        pullUserInfoInterval = window.setInterval(getUserInfo, 5000);
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
        timer.textContent = (Swal.getTimerLeft() / 1000).toFixed();
      }, 100);

    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {

  });
  }

  const saveWithExpiry = (key, value, ttl) => {
    let now = new Date()
    let item = {
		value: value,
		expiry: now.getTime() + ttl,
  }
    localStorage.setItem(key, JSON.stringify(item));
  }

  const getWithExpiry = (key) =>{
    let itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null
    }
    let item = JSON.parse(itemStr)
    let now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }

  const getUserInfo = async() =>{
    if(getWithExpiry("transId") === null || getWithExpiry("transId") === undefined || username !== ""){
      clearInterval(pullUserInfoInterval);
    }
    else{
      const response = await axios.get(apiBaseUrl + "auth/user/" + getWithExpiry("transId"));
      if(response.data.status !== "WAITING" && response.data.name !== null){
        setUsername(response.data.name.split("-").reverse().join("-"));
        setDateOfBirth(response.data.dateOfBirth);
        setIsNafathChecked(true);
        Swal.close();
      }
      else if(response.data.status === "REJECTED"){
        Swal.close();
        clearInterval(pullUserInfoInterval);
        Swal.fire({
          title: "<strong>عذرًا تم رفض الطلب من المستخدم</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
      });
      }
      else if(response.data.status === "EXPIRED"){
        Swal.close();
        clearInterval(pullUserInfoInterval);
        Swal.fire({
          title: "<strong>عذرًا انتهى الوقت يرجى المحاولة بعد دقيقة/strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
        });
      }
    }
  } 

  return (
    <div className="grid support grid-cols-2 mt-10 p-10">
      <div className="dinNextLtBold">
        <h5 className="cyanTitle"> تسجيل جديد </h5>
        <h3 className=" text-[40px]"> سجل مع عقار سوم </h3>
        <h4 className="text-[28px] dinNextLtRegular">
          وتمكن من عرض عقاراتك بكل سهولة واحترافية{" "}
        </h4>

        <div className="content flex py-2">
          <div className="item-body px-2">
            <h5 className="text-[15px] text-cyan">
              * التسجيل عن طريق الدخول بحساب النفاذ الوطني الموحد
            </h5>
          </div>
          <img src={NicLogo} alt="Nic" className="w-12"/>
        </div>
        {isLoading && (
          <div
          class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
            <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
            </div>
        )}
        {!isLoading && !nafathChecked &&(
          <form onSubmit={handleFormSubmit}>
          <Label text="رقم الهوية" />
          <input
            className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
            placeholder="1xxxxxxxxx"
            value={nationalId}
            onChange={handleFormChange}
            maxLength={10}
            type="text"
          />
          {!validNationalId && nationalId.length !== 0 && (
            <p className="text-red-700">رقم الهوية غير صحيح</p>
          )}
          <button className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen"
          disabled={validNationalId ? false: true}>
            التالي
            </button>
        </form>
        )}

        {!isLoading && nafathChecked && (
          <form>
            <Label className="mt-4" text="الاسم"/>
            <input type="text" className="" value={username} disabled={true}/>
            <Label className="mt-4" text="تاريخ الميلاد"/>
            <input type="text" className="" value={dateOfBirth} disabled={true}/>
             <button className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen" type="button">
                تسجيل
              </button>
          </form>
        )}
      </div>
      <div className="w-[80%]">
        <img src={suppoerHeaderBg} alt="support page hero bg" />
      </div>
    </div>
  );
};

export default Loggin;
