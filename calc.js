const li=['1','2','3','4','5','6','7','8','9','+','-','*','/','%','0','00','.'];
const sum=document.getElementById('equal');
const inn=document.getElementById('calc-input');
document.addEventListener('click',function(event){
    const text=event.target.innerText;
    if(li.includes(text)){
        
        inn.value+=text;
    }
});
console.log(inn.value);
sum.addEventListener('click',function(){
    const a=eval(inn.value);
    inn.value=a;
});
const clear=document.getElementById('clear');
clear.addEventListener('click',function(){
    inn.value='';
});
const cut=document.getElementById('cut');
cut.addEventListener('click',function(){
    inn.value=(inn.value).slice(0,-1);
});
