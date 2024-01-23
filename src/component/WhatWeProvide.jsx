import { Component } from "react";
import Phones from "../assets/phones.png";
import { WHAT_WE_PROVIDE_CHANGE_AS_BUYER } from "../constants/actionTypes";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ...state.whatweprovide
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateWhatWeProvideInfo: (payload) => dispatch({ type: WHAT_WE_PROVIDE_CHANGE_AS_BUYER, payload }),
});

class WhatWeProvide extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.props.onUpdateWhatWeProvideInfo({
      asBuyer: value
    });
  }

  render(){
    const { asBuyer } = this.props;
    return (
      <div className="text-right grid grid-cols-2 p-4 mt-20 rightDir">
        <div>
          {/* text-[#808080] */}
          <h2 className="dinNextLtRegular  mb-10 text-cyan text-[48px]">
            {" "}
            سوم العقار تطبيقك الأمثل للعقارات <b> ايش نقدم لك؟</b>
          </h2>
          <ul className="flex rightDir  border-b-[1px] w-[80%] justify-around border-lightGray  font-bold text-[18px] text-right ">
            <li
              onClick={() => this.handleChange(false)}
              className={`${
                !asBuyer
                  ? "border-b-2 text-darkBlue pb-3 border-darkBlue"
                  : "text-[#808080]"
              }  dinNextLtBold text-center  w-full`}
            >
              كبائع{" "}
            </li>
            <li
              onClick={() => this.handleChange(true)}
              className={`${
                asBuyer
                  ? "border-b-2 pb-3 border-darkBlue text-darkBlue"
                  : "text-[#808080]"
              }  dinNextLtBold text-center  w-full`}
            >
              كمشتري
            </li>
          </ul>
          <div></div>
          {asBuyer && (
            <p className="dinNextLtRegular text-[21px] mt-6 text-darkBlue">
              خدمة عملاء رائعة 24/7 <br />
              احنا نتعامل مع كل شيء عنك من الألف إلى الياء <br />
              نقدر نبيع عقاراتك بشكل أسرع من البقية <br />
              لوحة تحكم لوكلاء العقارات المتعاونين مع سوم
            </p>
          )}
          {!asBuyer && (
            <p className="dinNextLtRegular text-[21px] mt-6 text-darkBlue">
              خدمة عملاء رائعة 24/7 <br />
              أسعارنا ارخص من السوق <br />
              تقدر تاخذ موعد و تزور العقار كله عن طريق الموقع
              <br />
              نتاكد ان المعلومات المعروضة لك صحيحة 100%
            </p>
          )}
        </div>
        <div>
          <img className="" src={Phones} alt="phones illustration" />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatWeProvide);