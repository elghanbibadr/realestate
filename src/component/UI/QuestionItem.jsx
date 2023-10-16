import { useState } from "react";
export const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div
            className={`w-6 h-6 mr-2 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            &rarr;
          </div>
          <h2 className="text-lg font-semibold">{question}</h2>
        </div>
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};
