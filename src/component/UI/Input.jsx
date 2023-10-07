
export const Input = ({placeholder,type="text",className}) => {
  return (
    <input type={type}  placeholder={placeholder} className={`input outline-none  ${className}     border-white  bg-white w-full max-w-xs placeholder-darkBlue  `} />
    )
}
