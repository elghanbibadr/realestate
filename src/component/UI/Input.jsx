
import pen from "../../assets/pen.png"
export const Input = ({placeholder,type="text",className}) => {
  return (

    <>
    <input type={type}  placeholder={placeholder} className={`input  relative outline-none      border-white  bg-white  max-w-xs placeholder-darkBlue w-full ${className}  `} />
    {/* <img className="absolute right-2" src={pen} alt='pen icon' /> */}
    </>
    )
}
