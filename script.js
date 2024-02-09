//calculator
const buttons = document.getElementsByTagName('button');
const screen = document.querySelector('#screen');
let result = 0;
let i = 0;





function appendValue(value,e) {
   
    if(i>0 && e.target.classList.contains('operation') && (screen.value[i-1] == '*' || screen.value[i-1] == '/' || screen.value[i-1] == '+' || screen.value[i-1] == '-')){
       
            screen.value = screen.value.toString().slice(0,i-1);
            screen.value += value;  
    }
    else {
        screen.value += value;
        i++;
    
    }  
}


for (const button of buttons) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'AC') {
            screen.value = '';
            i=0;
        }

        else if (e.target.id === 'DEL') {
            screen.value = screen.value.toString().slice(0,-1);
            i--;
        }

        else if(e.target.classList.contains('calculate')){
            screen.value = eval(screen.value);
            i = screen.value.length;
        }

        else{
           appendValue(e.target.textContent,e);
        }
    });
}