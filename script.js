
var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;

function reset(){
    operand1 = null;
    operand2 = null;
    operator = null;
}

for(let i=0;i<buttons.length;i++){

    buttons[i].addEventListener('click',function(){
        var value = buttons[i].getAttribute('data-value');
        if(value == '+' || value == '-' || value == '*' || value == '/')
        {
            if(display.innerText !== ''){

                operand1 = display.innerText;
                operator = value;
                display.innerText = '';
            }
            else{
                alert('Please enter 1st value')
            }
            
        }
        else if(value == '='){

            if(operand1 !== '' && operand1[(operand1.length)-1] == '%'){
                var text = operand1.slice(0,(operand1.length-1));
                display.innerText = eval(text + ' ' + '/' + ' ' + 100);
                reset();
            }
            else if(display.innerText !== '' && operator !== null){

                    operand2 = display.innerText;
                    var result = eval(operand1 + ' ' + operator + ' ' + operand2);
                    display.innerText = result;
                    reset();
                }
            else if(display.innerText == '' && operator == null){
                alert('Please enter 1st value');
            }
            else if(operator == null){
                alert('Please select operator');
            }
            else{
                alert('Please enter 2nd value');
            } 
        }
        else if(value == 'ac'){
            display.innerText = '';
            reset();
        }
        else if(value == 'sign'){
            display.innerText = '-';
        }
        else if(value == '%'){

            if(display.innerText !== ''){
                display.innerText += '%';
                operand1 = display.innerText;
            }
        }
        else{
            display.innerText = display.innerText + value;
        }
    });
}
