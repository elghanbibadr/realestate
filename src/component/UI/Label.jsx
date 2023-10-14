
const Label = ({text,className}) => {
  return (
    <p className={` text-[18px]  mb-2 text-darkBlue dinNextLtBold ${className}  `}> {text} </p>
  )
}

export default Label