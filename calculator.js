// number buttons
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
// function buttons
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');
// display
let screen = document.querySelector('.screen');
let subject = document.querySelector('.subject');
// operations
const addition = function(a,b) {
    return a+b
}
const subtraction = function(a,b) {
    return a-b
}
const multiplication = function(a,b) {
    return a*b
}
const division = function(a,b) {
    return a/b
}
// event handlers
let functionButtons = [add,subtract,multiply,divide];
let functions = [' + ',' - ',' x ',' / ']
let numpadButtons = [one,two,three,four,five,six,seven,eight,nine,zero];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
// for the numpad buttons
numpadButtons.map(button => {
    let current = numbers.shift()
    button.addEventListener('click', function() {
        numberMemory += current;
        subject.textContent = numberMemory
    })
});
// for the function buttons (excluding clear and equals)
functionButtons.map(button => {
    let current = functions.shift()
    button.addEventListener('click', function() {
        numberMemory += current;
        subject.textContent = numberMemory
        jumper()
    })
});
// for clear button
clear.addEventListener('click', function() {
    subject.textContent = ''
    numberMemory = ''
})
// calculator
let numberMemory = ''
let result = ''

const operate = function() {
    let numberSplit = numberMemory.split(' ')
    let n1 = Number(numberSplit[0])
    let n2 = Number(numberSplit[2])
    let operation = numberSplit.splice(1,1)
    switch(operation[0]) {
        case '+':
            result = (addition(n1,n2));
            break;
        case '-':
            result = subtraction(n1,n2);
            break;
        case 'x':
            result = multiplication(n1,n2);
            break;
        case '/':
            result = division(n1,n2);
            break;
    }
    finisher()
}
const limiter = function() {
    let numberSplit = numberMemory.split(' ')
    let check = '+-x/'
    let operators = numberSplit.filter(item => check.includes(item) && item)
    if (operators.length > 1) {
        subject.textContent = 'Error'
        numberMemory = ''
    } else if(numberSplit[0] === '' && numberSplit[2] === '') {
        subject.textContent = ''
        numberMemory = ''
    } else if (numberMemory.includes('0 /') === true || numberMemory.includes('/ 0') === true) {
        subject.textContent = 'Whoops!'
        numberMemory = ''
    } else {
        operate()
    }
}

const jumper = function() {
    let numberSplit = numberMemory.split('')
    let check = '+-x/'
    let operators = numberSplit.filter(item => check.includes(item) && item)
    console.log(operators)
    if(operators.length === 2) {
        operate()
        let last = ' ' + operators.pop() + ' '
        numberMemory += last
    }
};

const finisher = function() {
    subject.textContent = '' + result
    numberMemory = result
}
equals.addEventListener('click', limiter)