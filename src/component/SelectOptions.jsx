import { Select, Option } from "@material-tailwind/react";
 
export function SelectOptions() {
  return (
    <div className=" select bg-white   rounded-md">
      <Select
        label="إختر" 
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        className="custom-select"
      >
  <Option>اختيار 1</Option>
  <Option>اختيار 2</Option>
  <Option>اختيار 3</Option>
  <Option>اختيار 4</Option>
     
    
     
      </Select>
    </div>
  );
}