// var numbers = [1,2,3,4,5,6,7,8,9,10,9,8];
// var sum = sumOfEvens(numbers);

// function sumOfEvens(numbers) {
//     let sum =0;
//     for(let i = 0; i <= numbers.length; i++){
//         if(numbers[i] % 2 === 0){
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }
// console.log (sum)

// var number=(1,2,3,4,5,6,7,8,9,10,11..valueOf100)

// function sumClassifier(number) {
//     if (number === 10) {
//       return "equal sum";
//   }
//   else if (number > 10) {
//       return "Large Sum";
//   } else  {
//       return "Small sum";
//   }

//   }
//   console.log (20);
// var numbers = [1,2,3,4,5,6,7,8,9,10,9,8];
// var sum = sumOfEvens(numbers);

// function sumOfEvens(numbers) {let sum =0;
//   for(let i = 0; i <= numbers.length; i++){
//       if(numbers[i] % 2 === 0){
//           sum += numbers[i];
//       }
//   }
//   return sum;

// }
// console.log (sum)

// function sumClassifier(number) {
//     if (number === 10) {
//       return "equal sum";
//   }
//   else if (number > 10) {
//       return "Large Sum";
//   } else  {
//       return "Small sum";
//   }

//   }
//   console.log (sumClassifier(10))

var num1 = [1, 3, 5, 7, 9];
var num2 = [2, 4, 6, 8];

function sumOfSquares(num1, num2) {
  let square1 = num1 * num1;
  let square2 = num2 * num2;
  let sum = square1 + square2;
  return sum;
}

console.log(sumOfSquares(1,2));
