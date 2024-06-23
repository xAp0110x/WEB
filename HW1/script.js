// task1
// function compareNums(num1, num2) {
//     if (num1 < num2) {
//         return -1;
//     } 
//     else if (num1 > num2) {
//         return 1;
//     } 
//     else {
//         return 0;
//     }
// }
// console.log(compareNums(9, 11));
// console.log(compareNums(3, 1));
// console.log(compareNums(10, 10));


//task2
// function recursiveFactorial(a){
//     if (a == 0){
//         return 1;
//     }
//     else{
//         return a * recursiveFactorial(a-1);
//     }
// }
// console.log(recursiveFactorial(5));

//task3
// function concatination(num1, num2, num3){
//     return num1.toString() + num2.toString() + num3.toString();
// }
// console.log(concatination(1, 4, 9));

//task4
// function areaCalculation(side1, side2) {
//     if (side2 === undefined) {
//         side2 = side1;
//     }
//     return side1 * side2;
// }
// console.log(areaCalculation(2, 3));
// console.log(areaCalculation(2));


// task5
// function isPerfectNumber(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum === number);
// }


//taks6
// function perfectNumbersInRange(min, max) {
//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             console.log(i);
//         }
//     }
// }


//taks7
// function formatTime(hours, minutes = 0, seconds = 0) {
//     console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
// }


//taks8
// function timeToSeconds(hours, minutes, seconds) {
//     console.log(hours * 3600 + minutes * 60 + seconds);
// }


//taks9
// function secondsToTime(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     console.log(formatTime(hours, minutes, remainingSeconds) );
// }


//taks10
// function differenceBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
//     const seconds1Total = timeToSeconds(hours1, minutes1, seconds1);
//     const seconds2Total = timeToSeconds(hours2, minutes2, seconds2);
//     const difference = Math.abs(seconds1Total - seconds2Total);
//     console.log(secondsToTime(difference));
// }
