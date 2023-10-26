// // import withMT from "@material-tailwind/react/utils/withMT";

// // export default withMT({
// //   content: ["./index.html", "./src/**/*.{js,jsx}"],
// //   theme: {
// //           colors:{
// //             darkBlue:"#161042",
// //             white:"#ffffff",
// //             cyan:'#0071F2',
// //             textColor:'#6E7681',
// //             lightGray:"#A7A7A7"
// //           }
// //       },

// // });

// // import withMT from "@material-tailwind/react/utils/withMT";
// // import daisyui from "daisyui";

// // export default withMT({
// //   content: ["./index.html", "./src/**/*.{js,jsx}"],
// //   theme: {
// //     colors: {
// //       darkBlue: "#161042",
// //       white: "#ffffff",
// //       cyan: "#0071F2",
// //       textColor: "#6E7681",
// //       lightGray: "#A7A7A7",
// //     },
// //   },
// //   plugins: [daisyui], // Add DaisyUI as a plugin
// // });

// // // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: ["./src/**/*.{html,js}"],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// // tailwind.config.js (ES6 module syntax)

// import { defineConfig } from 'tailwindcss';

// export default defineConfig({
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors: {
//               darkBlue: "#161042",
//               white: "#ffffff",
//               cyan: "#0071F2",
//               textColor: "#6E7681",
//               lightGray: "#A7A7A7",
//             },
//     },
//   },
//   plugins: [],
// });

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#161042",
        white: "#ffffff",
        lightBlueDark: "#3B3A5D",
        cyan: "#0071F2",
        textColor: "#6E7681",
        lightGray: "#A7A7A7",
        darkGreen: "#11998E",
      },
    },
  },
  plugins: [daisyui], // Add DaisyUI as a plugin
  daisyui: {
    themes: [],
  },
};
