// ## JavaScript
// ### Написать метод который собирает из объектного вида CSS в строку:
// ```javascript
// /*
// 	interface IObjectCSS {
// 	   [key: string]: number | string | IObjectCSS | [IObjectCSS],
// 	}
// */

const input = {
  body: {
    color: "red"
  },

  "@media (max-width: 996px)": [
    {
      ".class-1": {
        "background-color": "#000"
      }
    }
  ]
};

function cssInJs(input) {
  if (typeof input !== "object") {
    return `${input}`;
  }
  let str = "{";
  for (let i in input) {
    if (Array.isArray(input[i])) {
      input[i].forEach(elem => {
        let objStr = JSON.stringify(elem);
        objStr.replace(/\\"/g, "\uFFFF"); //U+ FFFF
        objStr = objStr
          .replace(/\"([^"]+)\":/g, "$1:")
          .replace(/\uFFFF/g, '\\"');
        console.log(objStr);
        str += `${i}:${objStr}`;
      });
    } else {
      const propVal = cssInJs(input[i]);
      str += `${i}:${propVal}`;
    }
    str += "}";
  }
  return str;
}

console.log(cssInJs(input));
// console.log(JSON.parse(input));
// const cssString = cssInJS(input);

// console.log(cssString); // 'body {color: red;} @media (max-width: 996px) {.class-1 {background-color: #000}}'
// ```

// const input = {
//   body: {
//     color: "red"
//   },
//   "@media (max-width: 996px)": {
//     "background-color": "#000"
//   }
// };

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

// function cssInJs(input) {
//   if (typeof input !== "object") {
//     return `${input}`;
//   }

//   let resStr = "{";
//   for (let i in input) {
//     const propVal = cssInJs(input[i]);
//     resStr += `${i}: ${propVal}`;
//   }
//   resStr += "}";

//   return resStr;
// }

// console.log(cssInJs(input));
