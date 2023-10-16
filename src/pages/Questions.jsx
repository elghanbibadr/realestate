import { QuestionItem } from "../component/UI/QuestionItem";

const Questions = () => {
  return (
    <div className="rightDir text-right dinNextLtRegular p-4 mt-10 ">
      <h5 className=" cyanTitle "> الأسئلة الشائعة</h5>
      <h3 className=" dinNextLtBold text-[40px]">اتطلع على الأسئلة الشائعة</h3>
      <h6 className="text-[24px] mb-10">آخر تحديث 14 / 06 / 2023 م</h6>
      <div className="w-fit mt-8">
        <QuestionItem
          question="Question 1"
          answer="Answer to Question 1 goes here."
        />
        <QuestionItem
          question="Question 2"
          answer="Answer to Question 2 goes here."
        />
        <QuestionItem
          question="Question 3"
          answer="Answer to Question 3 goes here."
        />
      </div>
    </div>
  );
};

export default Questions;
