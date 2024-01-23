import suppoerHeaderBg from "../assets/supportHeader.png";
import Label from "../component/UI/Label";
import { Component } from "react";
import Swal from 'sweetalert2';
import { UPDATE_SIGNIN_INFO } from "../constants/actionTypes";
import { connect } from "react-redux";
import {isValidForm, isValidEmail, isValidPassword} from "../utils/validation";
import axiosInstance from "../Api";

const mapStateToProps = (state) => ({
  ...state.signIn
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateSignInInfo: (payload) => dispatch({ type: UPDATE_SIGNIN_INFO, payload }),
});


class SignIn extends Component {
  constructor(props){
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange(e){
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.props.formErrors;
    if(name === "email"){
      formErrors.email = isValidEmail(value) ? "": "البريد الإلكتروني غير صحيح";
    }else if(name === "password"){
      formErrors.password = value.length >=8 ? "": "الرقم السري يجب ان لايقل عن 8 خانات";
    }
    this.props.onUpdateSignInInfo({
      [name]: value,
      formErrors: formErrors
    });
  }

  async handleFormSubmit(e){
    e.preventDefault();
    const { formErrors, email, password, userType } = this.props;
    if(isValidForm(formErrors)){
      try{
        this.props.onUpdateSignInInfo({isLoading: true});
        const response = await axiosInstance.post("/auth/login", {
          email: email,
          password: password,
          userType: userType
        });
        axiosInstance.defaults.headers['Authorization'] = response.data.access_token;
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("username", response.data.user.name);
        localStorage.setItem("userType", response.data.user_type);
        this.props.onUpdateSignInInfo({isLoading: false});
        window.location.href = "/";
      }catch(e){
        this.props.onUpdateSignInInfo({isLoading: false});
        Swal.fire({
          title: "<strong>عذرًا البريد الإلكتروني او الرقم السري غير صحيح</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
      });
      }
    }
  }

  render(){
    const { isLoading, email, password, formErrors } = this.props;
    return (
      <div className="grid support grid-cols-2 mt-10 p-10">
        <div className="dinNextLtBold">
          <h5 className="cyanTitle"> تسجيل الدخول </h5>
          <h3 className=" text-[40px]"> سجل مع عقار سوم </h3>
          <h4 className="text-[28px] dinNextLtRegular">
            وتمكن من عرض عقاراتك بكل سهولة واحترافية{" "}
          </h4>
          <div className="content flex py-2">
            <div className="item-body px-2">
              <h5 className="text-[15px] text-cyan">
                تسجيل الدخول
              </h5>
            </div>
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
          {!isLoading && (
            <form onSubmit={this.handleFormSubmit}>
            <Label text="البريد الإلكتروني" />
            <input
              name="email"
              className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
              value={email}
              onChange={this.handleFormChange}
              type="email"
              required
            />
            {formErrors.email.length > 0 && (
              <p className="text-red-700">{formErrors.email}</p>
            )}
            <Label text="نوع التسجيل"/>
            <select defaultValue={1} className="select bg-none select-bordered bg-white px-4 border-white w-full max-w-xs appearance-none py-2 pl-8 pr-2" name="userType" onChange={this.handleFormChange}>
              <option value={1}>مشتري</option>
              <option value={2}>وسيط عقاري</option>
              <option value={3}>مالك عقار</option>
              <option value={4}>منشأة عقارية</option>
            </select>
            <Label className="mt-4" text="الرقم السري"/>
            <input type="password"
            className="input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue    border-darkBlue appearance-none hover:appearance-none focus:appearance-none border-white mb-6"
            value={password} name="password" onChange={this.handleFormChange} required/>
            {formErrors.password.length > 0 && (
            <p className="text-red-700">{formErrors.password}</p>
            )}
            <button type="submit" className="btn block mt-5 bg-darkGreen text-white w-full btn-accent max-w-xs hover:bg-darkGreen"
            disabled={isValidForm(formErrors) ? false: true}>
              التالي
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);