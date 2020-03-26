// // ## JavaScript
// // ### Написать метод который собирает из объектного вида CSS в строку:

// const input = {
//   body: {
//     color: 'red'
//   },

//   '@media (max-width: 996px)': [
//     {
//       '.class-1': {
//         'background-color': '#000',
//       }
//     }
//   ]
// };

// function cssInJs(input) {
//   if (typeof input !== "object") {
//     // Только здесь нужно заморочиться, чтобы привести точно к строке, потому что если вернешь number, то все по пизде пойдет
//     return `${input};`;
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

// ### Есть функция seq, логика её работы следующая seq(x => x +2)(x => x * 4)(4) // 18, необходимо написать реализацию этой функции (Если задачаслишком легка, то попытаться уместить решение в 100 символов или меньше без учета пробелов)


function seq(x) {
  return x + 2;
}

console.log(seq(2));

// console.log(seq(x => x + 2)(x => x * 4)(4));