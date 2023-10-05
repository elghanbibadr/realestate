// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//       colors:{
//         darkBlue:"#161042",
//         white:"#ffffff",
//         cyan:'#0071F2',
//         textColor:'#6E7681'
//       }
//   },
//   plugins: [],
// }

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
          colors:{
            darkBlue:"#161042",
            white:"#ffffff",
            cyan:'#0071F2',
            textColor:'#6E7681'
          }
      },
  plugins: [],
});
