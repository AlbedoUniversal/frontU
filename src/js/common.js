// ## JavaScript
// ### Написать метод который собирает из объектного вида CSS в строку:
// ```javascript
// /*
// 	interface IObjectCSS {
// 	   [key: string]: number | string | IObjectCSS | [IObjectCSS],
// 	}
// */

// const input = {
//       body: {
//       	    color: red,
//       },

//       '@media (max-width: 996px)': [
//       	{
// 		'.class-1': {
// 			    'background-color': '#000',
// 		}
// 	}
//       ]
// };

// const cssString = cssInJS(input);

// console.log(cssString); // 'body {color: red;} @media (max-width: 996px) {.class-1 {background-color: #000}}'
// ```

const input = {
  body: {
    color: "red"
  },
  "@media (max-width: 996px)": {
    "background-color": "#000"
  }
};

// function cssInJS(input) {
//   let strCss = "";
//   for (let item of Object.keys(input)) {
//     strCss += `${item}{;`;
//     for (let supItem of Object.keys(input[item])) {
//       strCss += `${supItem}:${input[item][supItem]};`;
//     }
//     strCss += `}`;
//   }
//   return strCss;
// }
// console.log(cssInJS(input));

// const input = {
//   body: {
//     color: "red"
//   },
//   "@media (max-width: 996px)": {
//     "background-color": "#000"
//   }
// };

function cssInJs(input) {
  if (typeof input !== "object") {
    // Только здесь нужно заморочиться, чтобы привести точно к строке, потому что если вернешь number, то все по пизде пойдет
    return `${input};`;
  }

  let resStr = "{";

  for (let i in input) {
    const propVal = cssInJs(input[i]);
    resStr += `${i}: ${propVal}`;
  }

  resStr += "}";

  return resStr;
}
