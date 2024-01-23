import arrow from "../../assets/arrow-right.png";

const Select = ({ options }) => {
  return (
    <div className="relative  w-[300px] ">
      <select defaultValue={""} className="select bg-none select-bordered bg-white px-4 border-white w-full max-w-xs appearance-none py-2 pl-8 pr-2">
        <option value={""}>
          اختر
        </option>

        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <img className="w-1/2" src={arrow} alt="arrow icon" />
      </div>
    </div>
  );
};

export default Select;
