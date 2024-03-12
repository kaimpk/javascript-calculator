let num1 = Float32Array;
let num2 = Float32Array;
let operation;
let displayValue;

//Calling every single button
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8') ;
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const btnClear = document.querySelector('#btnClear');
const btnEquals = document.querySelector('#btnEquals')
const displayPara = document.querySelector('#displayP');
const btnAllClear = document.querySelector('#btnAllClear')


//functions
const add = (num1, num2) =>{
    let sum = num1 + num2;
    if(Number.isInteger(sum)){return sum}
    else{ return decimal(sum);}
}


const subtract = (num1, num2) => {
    let sum = num1-num2;
    if(Number.isInteger(sum)){return sum}
    else{ return decimal(sum);}
}


const multiply = (num1, num2) =>{
    let sum = num1 * num2;
    if(Number.isInteger(sum)){return sum}
    else{ return decimal(sum);}

}

const divide = (num1, num2) =>{
    let sum =num1 / num2;
    if(Number.isInteger(sum)){return sum}
    else{ return decimal(sum);}
}

function decimal(x) {
    return Number.parseFloat(x).toFixed(8);
  }

const operate = (num1, num2, operation) =>{
    if(operation === 'add'){
        return add(num1, num2);
    }else if(operation === 'subtract'){
        return subtract(num1, num2);
    } else if(operation === 'multiply'){
        return multiply(num1, num2);
    }else if(operation === 'divide'){
        return divide(num1, num2);
    }

}
function clearP(){
    displayPara.textContent = " ";
    displayValue = parseFloat(displayPara.textContent);
    // num1 = null;
    // num2 = null;
    // operation = null;
}

btnPlus.addEventListener('click', () =>{
    num1 = parseFloat(displayPara.textContent);
    operation = 'add';
    clearP();
});
btnMinus.addEventListener('click', () =>{
    
    
    num1 = parseFloat(displayPara.textContent);
    operation = 'subtract'
    clearP();
});
btnMultiply.addEventListener('click', () =>{
    
    
    num1 = parseFloat(displayPara.textContent);
    operation = 'multiply'
    clearP();
});
btnDivide.addEventListener('click', () => {
    num1 = parseFloat(displayPara.textContent);
    operation = 'subtract'
    clearP();
});

btnEquals.addEventListener('click', () =>{
    num2 = parseFloat(displayPara.textContent);
    const final = operate(num1, num2, operation);
    console.log(num1, num2, operation);
    displayPara.textContent =  final;
})

btnClear.addEventListener('click', clearP);
//event listeners for numbers

btn0.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 0;
});
btn1.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 1;
});
btn2.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 2;
});
btn3.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 3;
});
btn4.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 4;
});
btn5.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 5;
});
btn6.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 6;
});
btn7.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 7;
});
btn8.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 8;
});
btn9.addEventListener('click',() =>{
    displayPara.textContent = displayPara.textContent + 9;
});
