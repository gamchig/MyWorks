// Номер 1 
// // let x = prompt("Введите число");
// // let num = Number (x)
// // if ( num > 0 ){
// //     num += 1
// //    console.log( num)
// // }
// // else{
// //     console.log(num)
// // }

// Номер 2
// let x = prompt("Введите число");
// let num = Number (x)
// if ( num > 0 ){
//     num += 1
//    console.log( num)
// }
// else{
//     ( num < 0 )
//     console.log(num - 2)
// }
 
// Номер 3
// let x = prompt("Введите число");
// let num = Number (x)
// if ( num > 0 ){
//     num += 1
//    console.log( num)
// }
// else if ( num < 0 ){
//     console.log(num - 2)
// }
// else {
//     ( num = 0)
//     console.log( 10 )
//  }

let a = prompt("Введите первое число")
let b = prompt("Введите второе число")
let c = prompt("Введите третье  число")
a = Number(a)
b = Number(b)
c = Number(c)
let counter = 0; 
if(  !isNaN (a) && a > 0 ){
counter = counter + 1
}
if(  !isNaN (b) && b > 0 ){
    counter = counter + 1
    }
 if(  !isNaN (c) && c > 0 ){
 counter = counter + 1
    }
    console.log(counter)

