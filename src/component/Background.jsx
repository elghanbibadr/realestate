import { Component } from "react";
import background from "../assets/Background.jpg";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Background extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="p-4 mt-10">
        <img
          className="w-full "
          src={background}
          alt="callout background image"
        />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Background);