import { Component } from "react";
import { QuestionItem } from "../component/UI/QuestionItem";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Questions extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="rightDir text-right dinNextLtRegular p-10 mt-10 ">
        <h5 className=" cyanTitle "> الأسئلة الشائعة</h5>
        <h3 className=" dinNextLtBold text-[40px]">اتطلع على الأسئلة الشائعة</h3>
        <h6 className="text-[24px] mb-10">آخر تحديث 14 / 06 / 2023 م</h6>
        <div className=" mt-8">
          <h2 className="dinNextLtBold text-[48px] mb-6">عن سوم عقار </h2>
          <QuestionItem
            question="ايش هو سوم عقار؟"
            answer="سوم عقار هو تطبيق يسهل عليك بيع وشراء افضل عقارات الرياض، مع مساعدة كاملة من فريقنا."
          />
          <QuestionItem
            question="لماذا اختار سوم عقار لشراء عقاري ؟"
            answer={`توفر لك "سوم عقار" تجربة فريدة و موثوقة في الحصول على خيارات متنوعة من المنتجات والخدمات العقارية عبر رحلة سهلة وقصيرة من الاختيا ر والتصفح إلى الدفع ونهاية بالتملك .`}
          />
          <QuestionItem
            question={` هل منصة "سوم عقار" منصة مرخصة ؟"`}
            answer="نعم، سوم عقار هي شركة عقارية متخصصة ومرخصة من الجهات ذات الاختصاص في المملكة العربية السعودية وتقدم خدماتها وفقًا لذلك ."
          />
          <QuestionItem
            question="ماهي المنتجات والخدمات التي نقدمها ؟"
            answer="حاليًا نقدم خدمة تسويق المخططات العقارية، ونعمل لتوفير تجربة أوسع وخيارات أكثر ."
          />
          <QuestionItem
            question="ماهي طرق الدفع المتوفر لدى سوم عقار؟"
            answer="يمكنك استخدام كافة الوسائل لدفع العربون سداد - مدى – أبل باي – فيزا – ماستر كارد."
          />
          <QuestionItem
            question="هل يمكنني الحصول على إيصال و عقد شراء من المنصة مباشرة ؟"
            answer="نعم، عند دفع العربون أو الشراء يمكنك الحصول على إيصال وعقد يوضح كافة تفاصيل العلمية من خلال صفح طلباتي."
          />
          <QuestionItem
            question="هل يمكنني زيارة مواقع البيع للمخططات والمنتجات المعروضة ؟"
            answer="نعم، يمكن زيارتها والاطلاع عليها ومعاينتها مباشرة، وذلك من خلال التنسيق مع وكيل البيع الظاهر للمنتج المراد الاطلاع عليه."
          />
          <QuestionItem
            question="في حال رغبت في الرجوع عن الشراء بعد دفع العربون، مالعمل ؟"
            answer="يمكنك الاطلاع على أحكام العربون من خلال زيارة الصفحة التالية."
          />
          <QuestionItem
            question="حين أواجه مشكلة في التعامل مع عقار كيف يمكنكم مساعدتي ؟"
            answer="بكل سرور نحن هنا لخدمتك، يمكنك من خلال التواصل مع رعاية العملاء"
          />
        </div>
        <h2 className="dinNextLtBold text-[48px]">ما لقيت اللي تحتاجه؟</h2>
        <h5 className=" cyanTitle "> تواصل معنا</h5>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);