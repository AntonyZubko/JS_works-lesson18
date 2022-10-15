var num1 = +prompt('enter num1');
var num2 = +prompt('enter num2');
var op = prompt ('enter operation */+-');
var res = 0;


if(op === '+'){
    res = num1 + num2 ;
}

if(op === '-'){
    res = num1 - num2 ;
}

if(op === '*'){
    res = num1 * num2 ;
}

if(op === '/'){
    res = num1 / num2 ;
}

if(!res) {
    alert('You can enter only numbers and operations');
} 
else {
    alert(`Your sum: ${res}`);
}