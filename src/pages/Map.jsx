import { Component } from "react";
import propertyCard4 from "../assets/Property card big 4.png";
import { Input } from "../component/UI/Input";
import arrowWhiteBg from "../assets/arrowWhiteBg.png";
import propertyCard5 from "../assets/Property card big 5.png";
import MyMap from "../component/MyMap";
import filterIcon from "../assets/filterIcon.png";
import searchnormal from "../assets/search-normal.png";
import propertyCard6 from "../assets/Property card big 6.png";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Map extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="rightDir p-10">
        <div className="dinNextLtBold p-4 mb-10">
          <h5 className="cyanTitle text-[24px]">ابحت عن عقارك </h5>
          <h3 className=" text-[40px]">من خلال الخريطة </h3>
          <h4 className="dinNextLtRegular text-[18px]">
            {" "}
            تقدر تشوف العقارات الموجودة في كل منطقة{" "}
          </h4>
        </div>
        <div className=" bg-[#EDF2F7] p-10 rounded-md">
          <div className="mt-10 w-fit relative  flex items-center mb-4">
            <img
              className="relative bottom-3"
              src={arrowWhiteBg}
              alt="arrpw with white background"
            />
            <Input
              className="text-right  filterProprtyInput  pl-20 pr-8  mx-3 border-white dinNextLtRegular"
              placeholder="حي النرجس، الرياض "
            />

            <img
              className="absolute right-[68px] top-[19px]"
              src={searchnormal}
              alt="search icon "
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <MyMap containerClassName="map-container" />
            <div className="h-fit ">
              <div className="flex justify-between items-center  p-4">
                <div>
                  <p className="text-textColor text-[18px] dinNextLtRegular">
                    650+ عقار
                  </p>
                  <h3 className="text-[#3E4958] text-[27px] font-semibold dinNextLtRegular">
                    عقارات النرجس
                  </h3>
                </div>
                <img className="h-10 w-10" src={filterIcon} alt="filter icon" />
              </div>
              <img src={propertyCard4} alt="property card" />
              <img src={propertyCard5} alt="property card" />
              <img src={propertyCard6} alt="property card" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);