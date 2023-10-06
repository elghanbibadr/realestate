import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
   
  import { SelectOptions } from "./SelectOptions";

  export function FilterProperties() {

    const rueOptions= ["Material Tailwind HTML", "Material Tailwind React", "Material Tailwind Vue"];

    return (
      <Card className="max-w-[330px] text-right p-4  bg-[#EDF2F7] px-10  h-fit mt-20">
         <div className="text-darkBlue dinNextLtBold ">
            <p className="text-[16px] mb-2">نوع العقار</p>
            <div className="flex cursor-pointer text-[14px] justify-evenly  rounded-md mx-auto  bg-white flex-row-reverse">
                <span className=" py-1">شقة</span>
                <span className="px-6 border-x py-1  border-1 border-[#cccccc44]">شقة</span>
                <span className=" py-1">شقة</span>
            </div>
         </div>
        <CardBody className="p-0 mt-6">
        <p className="text-[16px] mb-2 text-darkBlue dinNextLtBold">المنطقة</p>
         <SelectOptions options={rueOptions}/>
        <p className="text-[16px] mb-2 text-darkBlue dinNextLtBold">الحي</p>
         <SelectOptions/>
         
        </CardBody>
        <CardFooter className="pt-0 mt-6">
          <Button  className="bg-darkBlue" fullWidth>
            Sign In
          </Button>
        
        </CardFooter>
      </Card>
    );
  }