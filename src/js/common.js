// // // ## JavaScript
// // // ### Написать метод который собирает из объектного вида CSS в строку:

// const input = {
//   body: {
//     color: "red"
//   },

//   "@media (max-width: 996px)": [
//     {
//       ".class-1": {
//         "background-color": "#000"
//       }
//     }
//   ]
// };

// function cssInJs(input) {
//   if (typeof input !== "object") {
//     return `${input}`;
//   }
//   let str = "{";
//   for (let i in input) {
//     if (Array.isArray(input[i])) {
//       let arrObjText = [];
//       input[i].forEach(elem => {
//         Object.keys(elem).forEach((k) => {
//           arrObjText.push(k);
//           Object.keys(elem[k]).forEach((y) => {
//             arrObjText.push(' ' + '{' + y + ':' + elem[k][y] + ';');
//           });
//         });
//         arrObjText = '{' + arrObjText.join('') + '}' + '}';
//       });
//       str += ` ${i} ${arrObjText}`;
//     } else {
//       const propVal = cssInJs(input[i]);
//       console.log(propVal);
//       str += `${i} :${propVal}`;
//     }
//     str += ";}";

//   }
//   return str;
// }

// console.log(cssInJs(input));


// // function cssInJs(input) {
// //   if (typeof input !== "object") {
// //     return `${input}`;
// //   }

// //   let resStr = "{";
// //   for (let i in input) {
// //     const propVal = cssInJs(input[i]);
// //     resStr += `${i}: ${propVal}`;
// //   }
// //   resStr += "}";

// //   return resStr;
// // }

// // console.log(cssInJs(input));

