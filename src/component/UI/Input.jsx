import pen from "../../assets/pen.png";
export const Input = ({
  placeholder,
  type = "text",
  className,
  withPen = false,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`input   outline-none   max-w-xs w-full    bg-white   placeholder-darkBlue   ${className} border-white mb-6   `}
      />
      {withPen && (
        <img
          className=" h-4 w-4 absolute left-12 top-4"
          src={pen}
          alt="pen icon"
        />
      )}
    </div>
  );
};
