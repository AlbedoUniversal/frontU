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



// // const a = function curry(func) {

// //   return function curried(...args) {
// //     if (args.length >= func.length) {
// //       return func.apply(this, args);
// //     } else {
// //       return function (...args2) {
// //         return curried.apply(this, args.concat(args2));
// //       }
// //     }
// //   };

// // }

// // console.log(a(x => x + 2)(x => x * 4)(4));



// // let seq = function (a) {
// //   if (typeof a == 'function') {
// //     return function () {
// //       return a(b);
// //     }
// //   }
// //   // for (let i = 0; i < arguments.callee.length; i++) {
// //   //   if(typeof a == 'function') {
// //   //     return function ddd () {

// //   //     }
// //   //   }
// //   // }
// //   // console.log(arguments.callee.length);
// //   // if(typeof a == 'func') {
// //   //   return function fff(...args) {
// //   //     let newFunc = a;
// //   //     args.push(newFunc);
// //   //   }
// //   // }
// //   // console.log(arguments.callee.a);
// //   // if (typeof a == 'func') {
// //   //   return function (...args) {
// //   //     seq(b)
// //   //   }
// //   // } else {
// //   //   seq(a(b(c)));
// //   // }
// // }


// // function ddd(func) {
// //   return function fff(...args) {
// //     if (typeof func == 'function') {
// //       let newFunc = func;
// //       args.push(newFunc);
// //       console.log(args);
// //       return function aaa(args) {
// //         console.log(args);
// //       }
// //     }
// //   }
// // }


// // const seq = function (func) {
// //   let arity = func.length;
// //   if (typeof func == 'function') {
// //     return function f1(...args) {
// //       console.log(arguments);

// //       // let newarr = args.push(func);
// //       // newarr += seq(newarr);
// //       // console.log(seq(newarr));
// //       // // // seq(f1(args));
// //       // // console.log(args);
// //       // // console.log(arity);
// //       if (typeof args == 'function');
// //       return function f2(...args) {

// //       }
// //       for (let i = 0; i < args.length; i++) {
// //         console.log(args[i]);
// //       }
// //     }
// //   }
// // }



// // const seq = function (func) {
// //   let arity = func.length;
// //   console.log(arity);
// //   return function f1(...args) {
// //     console.log('f1', args);
// //     if (args.length >= arity) {
// //       return func(...args);
// //     } else {
// //       // console.log('need more arguments');
// //       return function f2(...moreArgs) {
// //         // console.log('f2', moreArgs);
// //         let newArr = args.concat(moreArgs);
// //         return f1(...newArr);

// //       }
// //     }
// //   }
// // }

// // const seq = ddd(func);

// function ddd(func) {
//   let arr = [];
//   if (typeof func == 'function') {
//     arr.push(func);
//     return function (func) {
//       ddd(func);
//       arr.push(func);
//     }
//   } else {
//     console.log(arr);
//   }

// }



// ddd(x => x + 2)(x => x * 4)(4);




