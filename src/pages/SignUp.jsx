import suppoerHeaderBg from "../assets/supportHeader.png";
import Label from "../component/UI/Label";
import  NicLogo from "../assets/NIC-logo.png";
import Swal from 'sweetalert2';
import { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_SIGNUP_INFO } from "../constants/actionTypes";
import {isValidNationalId, isValidForm, isValidEmail, isValidPassword, isValidConfirmPassword, isValidPhoneNumber} from "../utils/validation";
import { saveWithExpiry, getWithExpiry } from "../utils/storage";
import axiosInstance from "../Api";

const mapStateToProps = (state) => ({
  ...state.signUp
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateSignUpInfo: (payload) => dispatch({ type: UPDATE_SIGNUP_INFO, payload }),
});

let timerInterval;
let pullUserInfoInterval;

class SignUp extends Component{
  constructor(props){
    super(props);
    this.handleNafathFormSubmit = this.handleNafathFormSubmit.bind(this);
    this.handleNafathFormChange = this.handleNafathFormChange.bind(this);
    this.handleBuyerFormSubmit = this.handleBuyerFormSubmit.bind(this);
    this.handleBuyerFormChange = this.handleBuyerFormChange.bind(this);
    this.handleBrokerFormChange = this.handleBrokerFormChange.bind(this);
    this.handleBrokerFormSubmit = this.handleBrokerFormChange.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  async handleNafathFormSubmit(e){
    e.preventDefault();
    const {nafathCheckErrors, nationalId, userType} = this.props;
    if(isValidForm(nafathCheckErrors)){
      try{
        this.props.onUpdateSignUpInfo({isLoading: true});
        const response = await axiosInstance.post("/auth/nafath/signup",{nationalId: nationalId, userType: userType});
        this.props.onUpdateSignUpInfo({
          isLoading: false,
          transId: response.data.token.transId,
          random: response.data.token.random
        });
        Swal.fire({
          title: "<strong> الرجاء استخدام تطبيق نفاذ واختيار الرقم التالي " + response.data.token.random + "</strong>",
          html: "<b></b>",
          icon: "info",
          showCloseButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          timer: 60000,
          timerProgressBar: false,
          didOpen: () => {
            pullUserInfoInterval = window.setInterval(this.getUserInfo, 5000);
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
      }catch(e){
        this.props.onUpdateSignUpInfo({isLoading: false});
        let message = e.response?.data?.message;
        Swal.fire({
          title: "<strong>" + message + "</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
        });
      }
    }
  }

  handleNafathFormChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    let nafathCheckErrors = this.props.nafathCheckErrors;
    if(name === "nationalId"){
      nafathCheckErrors.nationalId = isValidNationalId(value) ? "" : "رقم الهوية غير صحيح"
    }
    else if(name === "userType"){
      nafathCheckErrors.userType = value !== undefined && (value >= 1 && value <= 4) ? "" : "عذرًا يجب اختيار نوع مستخدم";
    }
    this.props.onUpdateSignUpInfo({
      [name]: value,
      nafathCheckErrors: nafathCheckErrors
    });
  }

  handleBuyerFormChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    let buyerFormErrors = this.props.buyerFormErrors;
    if(name === "email"){
      buyerFormErrors.email = isValidEmail(value) ? "": "البريد الإلكتروني غير صحيح";
    }else if(name === "password"){
      buyerFormErrors.password = isValidPassword(value) ? "" : "الرقم السري يجب ان يكون 8 خانات على الاقل";
    }else if(name === "confirmPassword"){
      buyerFormErrors.confirmPassword = isValidConfirmPassword(this.props.password, value) ? "" : "تأكيد الرقم السري غير مطابق للرقم السري";
    }else if(name === "phoneNumber"){
      buyerFormErrors.phoneNumber = isValidPhoneNumber(value) ? "" : "رقم الجوال غير صحيح";
    }else if(name === "gender"){
      buyerFormErrors.gender = value !== undefined && value.length > 0 ? "" : "الجنس غير صحيح";
    }
    this.props.onUpdateSignUpInfo({
      [name]: value,
      buyerFormErrors: buyerFormErrors
    });

  }

  async handleBuyerFormSubmit(e){
    e.preventDefault();
    const { buyerFormErrors, transId, userType, name, email, password, nationalId, phoneNumber, dateOfBirthHijry, dateOfBirth, gender} = this.props;
    if(isValidForm(buyerFormErrors)){
      try{
        this.props.onUpdateSignUpInfo({isLoading: true});
        const response = await axiosInstance.post("/auth/signup",{
          name: name,
          email: email,
          userType: userType,
          password: password,
          nationalId: nationalId,
          transId: transId,
          dateOfBirthHijry: dateOfBirthHijry,
          dateOfBirth: dateOfBirth,
          gender: gender,
          phone_number: phoneNumber,
        });
        Swal.fire({
          title: "<strong>تم التسجيل بنجاح، يرجى تسجيل الدخول</strong>",
          html: "<b></b>",
          icon: "success",
          showCloseButton: true,
          showConfirmButton: false
        });
        window.location.href = "/signin";
      }catch(e){
        this.props.onUpdateSignUpInfo({isLoading: false});
        Swal.fire({
          title: "<strong>عذرًا حصل خطأ اثناء التسجيل</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
        });
      }
    }
  }

  handleBrokerFormChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    let brokerFormErrors = this.props.brokerFormErrors;
    if(name === "email"){
      brokerFormErrors.email = isValidEmail(value) ? "": "البريد الإلكتروني غير صحيح";
    }else if(name === "password"){
      brokerFormErrors.password = isValidPassword(value) ? "" : "الرقم السري يجب ان يكون 8 خانات على الاقل";
    }else if(name === "confirmPassword"){
      brokerFormErrors.confirmPassword = isValidConfirmPassword(this.props.password, value) ? "" : "تأكيد الرقم السري غير مطابق للرقم السري";
    }else if(name === "phoneNumber"){
      brokerFormErrors.phoneNumber = isValidPhoneNumber(value) ? "" : "رقم الجوال غير صحيح";
    }else if(name === "gender"){
      brokerFormErrors.gender = value !== undefined && value.length > 0 ? "" : "الجنس غير صحيح";
    }else if(name === "brokerageContractNumber"){
      brokerFormErrors.brokerageContractNumber = value !== undefined && value.length > 0 ? "" : "";
    }else if(name === "brokerageContractExpireDate"){
      brokerFormErrors.brokerageContractExpireDate = value !== undefined && value.length > 0 ? "" : "";
    }
    this.props.onUpdateSignUpInfo({
      [name]: value,
      brokerFormErrors: brokerFormErrors
    });
  }

  async handleBrokerFormSubmit(e){
    e.preventDefault();
    const { 
      brokerFormErrors,
      transId,
      userType,
      name,
      email,
      password,
      nationalId,
      phoneNumber,
      dateOfBirthHijry,
      dateOfBirth,
      gender,
      brokerageContractNumber,
      brokerageContractExpireDate
    } = this.props;
    if(isValidForm(brokerFormErrors)){
      try{
        this.props.onUpdateSignUpInfo({isLoading: true});
        const response = await axiosInstance.post("/auth/signup",{
          name: name,
          email: email,
          userType: userType,
          password: password,
          nationalId: nationalId,
          transId: transId,
          dateOfBirthHijry: dateOfBirthHijry,
          dateOfBirth: dateOfBirth,
          gender: gender,
          phone_number: phoneNumber,
          brokerage_contract_number: brokerageContractNumber,
          brokerage_contract_expire_date: brokerageContractExpireDate
        });
        Swal.fire({
          title: "<strong>تم التسجيل بنجاح، يرجى تسجيل الدخول</strong>",
          html: "<b></b>",
          icon: "success",
          showCloseButton: true,
          showConfirmButton: false
        });
        window.location.href = "/signin";
      }catch(e){
        this.props.onUpdateSignUpInfo({isLoading: false});
        Swal.fire({
          title: "<strong>عذرًا حصل خطأ اثناء التسجيل</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
        });
      }
    }
  }


  async getUserInfo(){
    const {name, transId} = this.props;
    if(transId === null || transId === undefined || name !== ""){
      clearInterval(pullUserInfoInterval);
    }
    else{
      const response = await axiosInstance.get("/auth/token/" + transId);
      if(response.data.status !== "WAITING" && response.data.name !== null){
        this.props.onUpdateSignUpInfo({
          nafathChecked: true,
          name: response.data.name.split("-").reverse().join("-"),
          dateOfBirth: response.data.dateOfBirthG,
          dateOfBirthHijry: response.data.dateOfBirth
        });
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


  render(){
    const { 
      nafathCheckErrors,
      buyerFormErrors,
      brokerFormErrors,
      ownerFormErrors,
      realEstateFormErrors,
      nafathChecked,
      isLoading,
      nationalId,
      name,
      userType,
      dateOfBirth, 
      email,
      password,
      confirmPassword,
      gender,
      phoneNumber,
      brokerageContractNumber,
      brokerageContractExpireDate
    } = this.props;
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
            <form onSubmit={this.handleNafathFormSubmit}>
            <Label text="رقم الهوية" />
            <input
              name="nationalId"
              className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
              placeholder="1xxxxxxxxx"
              value={nationalId}
              onChange={this.handleNafathFormChange}
              maxLength={10}
              type="text"
            />
            {nafathCheckErrors.nationalId.length > 0 && (
              <p className="text-red-700">{nafathCheckErrors.nationalId}</p>
            )}
            <Label text="نوع التسجيل"/>
            <select value={userType} className="select bg-none select-bordered bg-white px-4 border-white w-full max-w-xs appearance-none py-2 pl-8 pr-2" name="userType" onChange={this.handleNafathFormChange}>
              <option value={1}>مشتري</option>
              <option value={2}>وسيط عقاري</option>
              <option value={3}>مالك عقار</option>
              <option value={4}>منشأة عقارية</option>
            </select>
            <button type="submit" className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen"
            disabled={isValidForm(nafathCheckErrors) ? false: true}>
              التالي
              </button>
          </form>
          )}

          {!isLoading && nafathChecked && parseInt(userType) === 1 && (
            <form onSubmit={this.handleBuyerFormSubmit}>
              <h6>التسجيل كمشتري</h6>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="mt-4" text="الاسم"/>
                  <input type="text"
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={name} name="name" disabled={true} required/>
                </div>
                <div>
                  <Label className="mt-4" text="تاريخ الميلاد"/>
                  <input type="text" 
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={dateOfBirth} name="dateOfBirth" disabled={true} required/>
                </div>
                <div>
                  <Label className="mt-4" text="رقم الهوية"/>
                  <input type="text" 
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={nationalId} name="nationalId" disabled={true} required/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mt-4" text="البريد الإلكتروني"/>
                  <input type="email" 
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={email} name="email" onChange={this.handleBuyerFormChange} required/>
                  {buyerFormErrors.email.length > 0 && (
                  <p className="text-red-700">{buyerFormErrors.email}</p>
                  )}
                </div>
                <div>
                  <Label className="mt-4" text="الرقم السري"/>
                  <input type="password"
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={password} name="password" onChange={this.handleBuyerFormChange} required/>
                  {buyerFormErrors.password.length > 0 && (
                  <p className="text-red-700">{buyerFormErrors.password}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mt-4" text="الجنس"/>
                  <select name="gender" onChange={this.handleBuyerFormChange} required value={gender} defaultValue={"M"} className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6">
                    <option value={"M"}>ذكر</option>
                    <option value={"F"}>انثى</option>
                  </select>
                </div>
                <div>
                  <Label className="mt-4" text="تأكيد الرقم السري"/>
                  <input type="password"
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={confirmPassword} name="confirmPassword" onChange={this.handleBuyerFormChange} required/>
                  {buyerFormErrors.confirmPassword.length > 0 && (
                  <p className="text-red-700">{buyerFormErrors.confirmPassword}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mt-4" text="رقم الجوال"/>
                    <input type="number" placeholder="966xxxxxxxxx" 
                    className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                    value={phoneNumber} name="phoneNumber" onChange={this.handleBuyerFormChange} required/>
                    {buyerFormErrors.phoneNumber.length > 0 && (
                    <p className="text-red-700">{buyerFormErrors.phoneNumber}</p>
                    )}
                </div>
              </div>
                <button type="submit" className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen">
                  تسجيل
                </button>
            </form>
          )}

          {!isLoading && nafathChecked && parseInt(userType) === 2 && (
            <form onSubmit={this.handleBrokerFormSubmit}>
              <h6>التسجيل كوسيط عقاري</h6>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="mt-4" text="الاسم"/>
                  <input type="text"
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={name} name="name" disabled={true} required/>
                </div>
                <div>
                  <Label className="mt-4" text="تاريخ الميلاد"/>
                  <input type="text" 
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={dateOfBirth} name="dateOfBirth" disabled={true} required/>
                </div>
                <div>
                  <Label className="mt-4" text="رقم الهوية"/>
                  <input type="text" 
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={nationalId} name="nationalId" disabled={true} required/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mt-4" text="البريد الإلكتروني"/>
                  <input type="email" 
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={email} name="email" onChange={this.handleBrokerFormChange} required/>
                  {brokerFormErrors.email.length > 0 && (
                  <p className="text-red-700">{brokerFormErrors.email}</p>
                  )}
                </div>
                <div>
                  <Label className="mt-4" text="الرقم السري"/>
                  <input type="password"
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={password} name="password" onChange={this.handleBrokerFormChange} required/>
                  {brokerFormErrors.password.length > 0 && (
                  <p className="text-red-700">{brokerFormErrors.password}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mt-4" text="الجنس"/>
                  <select name="gender" onChange={this.handleBrokerFormChange} required value={gender} defaultValue={"M"} className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6">
                    <option value={"M"}>ذكر</option>
                    <option value={"F"}>انثى</option>
                  </select>
                </div>
                <div>
                  <Label className="mt-4" text="تأكيد الرقم السري"/>
                  <input type="password"
                  className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                  value={confirmPassword} name="confirmPassword" onChange={this.handleBrokerFormChange} required/>
                  {brokerFormErrors.confirmPassword.length > 0 && (
                  <p className="text-red-700">{brokerFormErrors.confirmPassword}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mt-4" text="رقم الجوال"/>
                    <input type="number" placeholder="966xxxxxxxxx" 
                    className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                    value={phoneNumber} name="phoneNumber" onChange={this.handleBrokerFormChange} required/>
                    {brokerFormErrors.phoneNumber.length > 0 && (
                    <p className="text-red-700">{brokerFormErrors.phoneNumber}</p>
                    )}
                </div>
                <div>
                  <Label className="mt-4" text="رقم رخصة الوساطة العقارية"/>
                    <input type="number" placeholder="966xxxxxxxxx" 
                    className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                    value={brokerageContractNumber} name="brokerageContractNumber" onChange={this.handleBrokerFormChange} required/>
                    {brokerFormErrors.brokerageContractNumber.length > 0 && (
                    <p className="text-red-700">{brokerFormErrors.brokerageContractNumber}</p>
                    )}
                </div>
                <div>
                  <Label className="mt-4" text="تاريخ انتهاء رخصة الوساطة العقارية"/>
                    {/* <input type="number" placeholder="966xxxxxxxxx" 
                    className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
                    value={brokerageContractExpireDate} name="brokerageContractNumber" onChange={this.handleBrokerFormChange} required/>
                    {brokerFormErrors.brokerageContractExpireDate.length > 0 && (
                    <p className="text-red-700">{brokerFormErrors.brokerageContractExpireDate}</p>
                    )} */}
                 <input type="date" name="brokerageContractExpireDate" placeholder="الرجاء اختيار تاريخ" required
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 />
                </div>
              </div>
                <button type="submit" className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen">
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
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);