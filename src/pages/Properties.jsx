import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import { Input } from "../component/UI/Input";
import filterIcon from "../assets/filterIcon.png";
import searchIcon from "../assets/searchIcon.png";
import { Link } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Properties extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="text-center mt-20 ">
          <h1 className="text-[60px] text-lightBlueDark ">
            عقارات متوفرة في النرجس
          </h1>
          <h2 className="text-[34px] dinNextLtRegular text-darkBlue">
            &#x200F;303 عقار معروض للبيع
          </h2>
          <div className="mt-10 w-fit relative flex mx-auto">
            <img className="h-12" src={filterIcon} alt="filter icon" />
            <Input
              className="text-right  w-full filterProprtyInput  pl-14 pr-6  mx-3 border-white dinNextLtRegular"
              placeholder="حي النرجس، الرياض "
            />

            <img
              className="absolute right-0 top-4"
              src={searchIcon}
              alt="search icon "
            />
          </div>
        </div>

        <div className="grid gap-10 grid-cols-2 cursor-pointer w-[60%] mx-auto mt-20">
          <Link to="/propertydetails">
            <img src={group1} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group2} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group1} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group2} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group1} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group2} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group1} alt="property group 1 image" />
          </Link>
          <Link to="/propertydetails">
            <img src={group2} alt="property group 1 image" />
          </Link>
        </div>
      </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Properties);