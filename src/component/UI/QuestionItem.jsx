import { useState } from "react";
import blackarrow from "../../assets/blackarrow.svg";

export const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8 w-[880px] ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="text-[18px] dinNextLtBold">{question}</h2>
          <div
            className={`w-[14px] h-[14px]  mr-2 transition-transform transform ${
              !isOpen ? "rotate-180" : ""
            }`}
          >
            <img src={blackarrow} alt="black arrow" />
          </div>
        </div>
      </div>
      {isOpen && (
        <p className="mt-2 text-[16px]  dinNextLtRegular ">{answer}</p>
      )}
    </div>
  );
};
