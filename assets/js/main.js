const numBtn = document.querySelectorAll('[data-number]');
const operandBtn = document.querySelectorAll('[data-operand]');
const equalBtn = document.querySelector('[data-equals]');
const output = document.querySelector('[data-output]');
const clear = document.querySelector('[data-clear]');

function addNumber(){
    numBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            output.innerHTML += btn.innerHTML;
        });
    });
}

function addOperand(){
    operandBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            if(output.innerHTML === '') return;
            output.innerHTML += btn.innerHTML;
        });
    });
}

function clearInput(){
    clear.addEventListener('click', ()=>{
        output.innerHTML = '';
    });
}

function evalBtn(){
    equalBtn.addEventListener('click', ()=>{
        if(output.innerHTML === '') return;
        try{
            output.innerHTML = eval(output.innerHTML);
        }
        catch(e){
            alert('Error')
            output.innerHTML = '';
        }
        
    });
}

clearInput();
addNumber();
addOperand();
evalBtn();