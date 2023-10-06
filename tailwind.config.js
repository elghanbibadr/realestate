
import withMT from "@material-tailwind/react/utils/withMT";


export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
          colors:{
            darkBlue:"#161042",
            white:"#ffffff",
            cyan:'#0071F2',
            textColor:'#6E7681',
            lightGray:"#A7A7A7"
          }
      },

});