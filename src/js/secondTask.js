// // ### Есть функция seq, логика её работы следующая seq(x => x +2)(x => x * 4)(4) // 18, необходимо написать реализацию этой функции (Если задачаслишком легка, то попытаться уместить решение в 100 символов или меньше без учета пробелов)

// // function seq(a) {  // классическое решение
// //   return function (b) {
// //     return function (c) {
// //       return a(b(c));
// //     }
// //   }
// // }

// // const seq = a => b => c => a(b(c)); // решение 34 символа

// // console.log(seq(x => x + 2)(x => x * 4)(4));

// function seq() {
//   let args = [].slice.apply(arguments);
//   console.log(args);

//   function resultFn() {
//     args = args.concat([].slice.apply(arguments));
//     const result = args.reduceRight((r, c) => c(r));
//     return resultFn;
//   }
//   return resultFn();
// }

// seq(x => x + 2)(x => x * 4)(4);


