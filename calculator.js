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
const addition = function(arr) {
    return arr.reduce((sum,current) => sum+current)
}
const subtraction = function(arr) {
    return arr.reduce((sum,current) => sum-current)
}
const multiplication = function(arr) {
    return arr.reduce((sum,current) => sum * current)
}
const division = function(arr) {
    return arr.reduce((sum,current) => sum/current)
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
        subject.textContent += current;
        numberMemory += current;
    })
});
// for the function buttons (excluding clear and equals)
functionButtons.map(button => {
    let current = functions.shift()
    button.addEventListener('click', function() {
        subject.textContent += current
        numberMemory += current;
    })
})
// for clear button
clear.addEventListener('click', function() {
    subject.textContent = ''
    numberMemory = ''
})
// memory
let numberMemory = ''
let result = ''
// operation checker
const opLoader = function(nums,ops) {switch(ops) {
    case '+':
        result = (addition(nums));
        break;
    case '-':
        result = subtraction(nums);
        break;
    case 'x':
        result = multiplication(nums);
        break;
    case '/':
        result = division(nums);
        break;
}}
// restructuring of calculation
const checker = function() {
    let numSplit = numberMemory.split(' ')
    let check = "+-x/"
    let ops = numSplit.filter(item => check.includes(item) ? true : false)
    let nums = numSplit.map(item => Number(item))
    let trueNums = nums.filter(item => Number.isNaN(item) === true ? false : true)
    let currentOp = ops.splice(0,1)
    opLoader(trueNums,currentOp[0])
    subject.textContent = '' + result
}

equals.addEventListener('click', checker)
