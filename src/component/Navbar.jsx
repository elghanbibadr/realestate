import En from "../assets/En.png";
import Menu from "../assets/Menu.png";
import logo from "../assets/logo.png";
import icon from "../assets/icon-house.png";
import line from "../assets/Line 1.png";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_CHANGE_OPEN } from "../constants/actionTypes";
import { connect } from "react-redux";
import axiosInstance from "../Api";
import Swal from "sweetalert2";

const mapStateToProps = (state) => ({
  ...state.navbar
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateNavbarInfo: (payload) => dispatch({ type: NAVBAR_CHANGE_OPEN, payload }),
});

class Navbar extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  handleChange(value){
    this.props.onUpdateNavbarInfo({
      navOpen: value
    });
  }

  async Logout(){
    try{
      let userType = parseInt(localStorage.getItem("userType"));
      let url = userType === 1 ? "/auth/users/logout" :
                userType === 2 ? "/auth/brokers/logout" :
                userType === 3 ? "/auth/owners/logout" : "/auth/realEstateCompanies/logout"; 
      const response = await axiosInstance.post(url);
      localStorage.removeItem("access_token");
      localStorage.removeItem("username");
      localStorage.removeItem("userType");
      window.location.href = "/";
    }catch(e){
      Swal.fire({
          title: "<strong>عذرًا حصل خطأ اثناء تسجيل الخروج</strong>",
          html: "<b></b>",
          icon: "error",
          showCloseButton: true,
          showConfirmButton: false
      });
    }
  }

  render(){
    const { navOpen } = this.props;
    return (
      <header className="p-4   bg-white ">
        <nav className="flex justify-between ">
          <ul className="text-darkBlue w-[50%] flex items-center   justify-between text-[16px]">
            <Link to="/addyourproperties">
              <li className="bg-darkBlue h-[50px] w-[156px] text-white flex items-center justify-center rounded-full ">
                <img className="relative  mr-2" src={icon} alt="icon-house" />
                <button className="text-[16px]   dinNextLtRegular">
                  اعرض عقارك
                </button>
              </li>
            </Link>
            {localStorage.getItem("username") !== null && (
              <>
              <p>{localStorage.getItem("username")} ،اهلًا</p>
              <button onClick={() => this.Logout()} className="text-darkBlue">تسجيل خروج</button>
              </>
            )}
            {localStorage.getItem("username") === null && (
              <>
            <NavLink to="signin" className="nav-link" activeclassname="active">
              <li className="text-darkBlue">تسجيل دخول</li>
            </NavLink>
            <NavLink to="signup" className="nav-link" activeclassname="active">
              <li className="text-darkBlue">تسجيل</li>
            </NavLink>
            </>
            )}
            <li>
              {" "}
              <img className="h-10" src={En} alt="change language icon" />{" "}
            </li>
            <NavLink to="/map" className="nav-link" activeclassname="active">
              <li>الخريطة</li>
            </NavLink>
            <NavLink
              to="/properties"
              className="nav-link"
              activeclassname="active"
            >
              <li>العقارات</li>
            </NavLink>
            <NavLink to="/" className="nav-link" activeclassname="active">
              الرئيسية
            </NavLink>
          </ul>
          <div className="flex  items-center">
            <Link to="/">
              <img className="h-10 mr-6" src={logo} alt="soum logo" />
            </Link>
            <img
              onClick={() => this.handleChange(!navOpen)}
              className="h-6 cursor-pointer"
              src={Menu}
              alt="hamburger menu"
            />
          </div>
        </nav>
        {navOpen && (
          <ul className="z-10 absolute  navColapse p-20 text-white text-[48px] text-right  w-full left-0 right-0  bottom-0 top-[4.8rem]">
            <Link to="/support" onClick={() => this.handleChange(false)}>
              <li className="cursor-pointer hover:text-cyan">الدعم</li>
            </Link>
            <Link to="/privacyPolicy" onClick={() => this.handleChange(false)}>
              <li className="cursor-pointer my-8 hover:text-cyan">
                سياسة الخصوصية
              </li>
            </Link>
            <Link to="/conditions" onClick={() => this.handleChange(false)}>
              <li className="cursor-pointer my-8 hover:text-cyan">
                الشروط و الأحكام
              </li>
            </Link>
            <Link to="questions">
              <li className="cursor-pointer    hover:text-cyan">أسئلة شائعة</li>
            </Link>
            <li>
              {" "}
              <img className="mt-8" src={line} />{" "}
            </li>
          </ul>
        )}
      </header>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);