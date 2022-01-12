// let x = 10;
// console.log(x);

// let y = 5;
// console.log(y);

// let word = 'привет';
// console.log(word)
// let r = 1;
// alert(r)
//  r = prompt(1234)
//  alert(r)

//  let userAge = prompt('Сколько лет?')
//  let userName = prompt('Ваше имя?')
//  let userWork = prompt('Место работы или номер школы?')
//  console.log( 'Мне ' + userAge + ' Меня зовут '+ userName + ' Мое место занятости ' + userWork);

// let  firstNumber =  prompt('Введите первое число')
// let num = Number(firstNumber)
// let  secondNumber = prompt('Введите второе число')
// let secondnum = Number(secondNumber)
// console.log(num + secondnum)
let h1 = document.querySelector('.h1')
let changeTitle = () => {
    h1.style.color = "red" ;
    let fontSize = prompt('Введите размер шрифта')
    h1.style.fontSize = fontSize + 'px'
}