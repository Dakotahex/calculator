
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(operator, a, b) {
    return operator(a, b);
};

// Selecting Display via DOM Methods
let container = document.getElementsByClassName('display');

let content = document.createElement('p');
content.classList.add('content');

let value = [];

// Adds content to display
const display = function(value) {
    content.textContent = value;
    container[0].appendChild(content);
};
 

// Event Listeners //


// Adds event listeners to all input class divs
// And adds the input number to the num and displays
const input = document.querySelectorAll('.input');

let num = '';

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function(event) {
            let a = event.target.innerHTML;
            if (a === '.' && numberTest(num)) {
                alert('Cannot enter multiple decimal points.')
            } else if (a === 'Back') {
                num = num.slice(0, -1);
                value[0] = num;
                display(value);
            } else {
                num += a;
                value[0] = num;
                display(value);
            }
    });
};


// Clear Button
let clear = document.querySelector('.clear');

clear.addEventListener('click', function() {
    value = [];
    num = '';
    num1 = '';
    answer = '';
    display(value);
});

// Computes and displays answer
let operateDiv = document.querySelector('.operate');

operateDiv.addEventListener('click', function() {
    let a = Number(num1);
    let b = Number(num);

    let answer = operate(operator, a, b);
    content.textContent = answer;
    num = answer;
});


// Saves first input num and locks in the operator
let num1 = '';
let operatorDiv = document.querySelectorAll('.operator');

for (let i = 0; i < operatorDiv.length; i++) {
    operatorDiv[i].addEventListener('click', function(event) {
        let a = event.target.innerHTML;
        if (a === '+') {
            operator = add;
        } else if (a === '-') {
            operator = subtract;
        } else if (a === 'x') {
            operator = multiply;
        } else if (a === '/') {
            operator = divide;
        };
        if (num === '') {
            
        } else {
            num1 = num;
            num = '';
        }
    });
};


// Check if value is a whole number
function numberTest(n)
{
   let result = (n - Math.floor(n)) !== 0; 
    return result;
}
